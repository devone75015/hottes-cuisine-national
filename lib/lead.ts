/**
 * Envoi des demandes de devis et de dépannage.
 *
 * ⚠ CHANGEMENT D'ARCHITECTURE — export statique
 *
 * Ce module était une Server Action (`"use server"`). Les Server Actions
 * exigent un serveur Node : elles sont incompatibles avec `output: "export"`.
 * L'envoi se fait donc désormais depuis le navigateur, vers un point de
 * réception HTTP.
 *
 * La validation reste ici, côté client, pour le confort de saisie — mais elle
 * n'a plus aucune valeur de sécurité : n'importe qui peut poster directement
 * sur l'endpoint. C'est le point de réception qui doit valider et filtrer,
 * pas ce fichier. Voir `public/api/lead.php`.
 */

export type LeadStage = "partial" | "complete";

/** Nature de la demande : devis d'entretien ou dépannage en cours. */
export type LeadKind = "quote" | "repair";

export interface LeadPayload {
  stage: LeadStage;
  kind?: LeadKind;
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

  /* ---- Champs propres au dépannage ---- */
  /** Nature de la panne — plusieurs symptômes peuvent coexister. */
  symptoms?: string[];
  /** Arrêt complet ou fonctionnement dégradé : détermine la priorité. */
  state?: string;
  brand?: string;
  model?: string;
  /** Le demandeur déclare pouvoir joindre des photos ou une vidéo. */
  hasMedia?: boolean;
}

export interface LeadResult {
  ok: boolean;
  error?: string;
}

/**
 * Point de réception des demandes.
 *
 * Par défaut `/api/lead.php`, livré dans `public/api/` et donc présent dans
 * `out/api/lead.php` après le build — il fonctionne tel quel sur un
 * hébergement mutualisé Hostinger, qui exécute PHP.
 *
 * Pour utiliser un service tiers (Formspree, Brevo, Web3Forms…), définir
 * NEXT_PUBLIC_FORM_ENDPOINT au build avec l'URL complète.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "/api/lead.php";

const PHONE_RE = /^(?:\+33|0)\s?[1-9](?:[\s.-]?\d{2}){4}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(payload: LeadPayload): string | null {
  if (!payload.phone || !PHONE_RE.test(payload.phone.trim())) {
    return "Merci d'indiquer un numéro de téléphone valide.";
  }
  if (!payload.city?.trim()) {
    return "Merci d'indiquer la ville de votre établissement.";
  }
  if (payload.stage === "complete") {
    if (!payload.email || !EMAIL_RE.test(payload.email.trim())) {
      return "Merci d'indiquer une adresse e-mail valide.";
    }
    if (!payload.name?.trim()) {
      return "Merci d'indiquer votre nom.";
    }
  }
  return null;
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const invalid = validate(payload);
  if (invalid) return { ok: false, error: invalid };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        // Horodatage côté client, à titre indicatif seulement : le point de
        // réception doit reposer sur sa propre horloge.
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return {
        ok: false,
        error:
          "Votre demande n'a pas pu être transmise. Appelez-nous directement, c'est le plus rapide.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Connexion impossible. Vérifiez votre réseau, ou appelez-nous directement.",
    };
  }
}
