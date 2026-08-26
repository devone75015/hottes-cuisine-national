"use server";

/**
 * Réception des demandes de devis.
 *
 * ÉTAT ACTUEL : la fonction valide et journalise le lead côté serveur.
 * À BRANCHER avant mise en production — au choix :
 *   - envoi e-mail transactionnel (Resend, Postmark, Brevo…)
 *   - création d'une fiche dans le CRM
 *   - webhook vers l'outil de suivi commercial
 *
 * Le lead partiel (étape 1) est enregistré séparément : un prospect qui
 * abandonne à l'étape 2 doit rester rappelable (§21 du cadrage).
 */

export type LeadStage = "partial" | "complete";

export interface LeadPayload {
  stage: LeadStage;
  service?: string;
  city?: string;
  postalCode?: string;
  phone?: string;
  establishment?: string;
  hoods?: string;
  network?: string;
  urgency?: string;
  company?: string;
  name?: string;
  email?: string;
  message?: string;
  /** Page d'origine — sert à l'attribution SEO / Ads. */
  source?: string;
}

export interface LeadResult {
  ok: boolean;
  error?: string;
}

const PHONE_RE = /^(?:\+33|0)\s?[1-9](?:[\s.-]?\d{2}){4}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  if (!payload.phone || !PHONE_RE.test(payload.phone.trim())) {
    return { ok: false, error: "Merci d'indiquer un numéro de téléphone valide." };
  }

  if (!payload.city?.trim()) {
    return { ok: false, error: "Merci d'indiquer la ville de votre établissement." };
  }

  if (payload.stage === "complete") {
    if (!payload.email || !EMAIL_RE.test(payload.email.trim())) {
      return { ok: false, error: "Merci d'indiquer une adresse e-mail valide." };
    }
    if (!payload.name?.trim()) {
      return { ok: false, error: "Merci d'indiquer votre nom." };
    }
  }

  // TODO — brancher l'envoi réel ici (e-mail transactionnel / CRM / webhook).
  console.info("[lead]", payload.stage, JSON.stringify(payload));

  return { ok: true };
}
