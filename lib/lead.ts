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
 * Point de réception principal — celui qui fait foi.
 *
 * Par défaut `/api/lead.php`, livré dans `public/api/` et donc présent dans
 * `out/api/lead.php` après le build — il fonctionne tel quel sur un
 * hébergement mutualisé Hostinger, qui exécute PHP. C'est lui qui valide,
 * enregistre dans `leads.log` et envoie le courriel.
 *
 * Pour utiliser un service tiers (Formspree, Brevo, Web3Forms…), définir
 * NEXT_PUBLIC_FORM_ENDPOINT au build avec l'URL complète.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "/api/lead.php";

/**
 * Miroir n8n — une copie, pas un remplacement.
 *
 * Le workflow n8n reçoit chaque demande déjà acceptée par le point de
 * réception principal. Le choix du miroir plutôt que de la substitution est
 * délibéré : un lead de restaurateur ne se rejoue pas. Si le workflow est
 * arrêté, mal configuré côté CORS, ou si le serveur n8n est indisponible, la
 * demande est malgré tout enregistrée et envoyée par courriel. L'inverse —
 * n8n seul — ferait disparaître des demandes sans que rien ne le signale.
 *
 * ⚠ Cette URL est inlinée dans le JavaScript public : elle est lisible par
 *   n'importe qui, et donc postable par n'importe qui. Aucun en-tête secret
 *   n'y changerait rien, il serait tout aussi lisible. La protection doit
 *   vivre dans le workflow : dédoublonnage et contrôle des champs.
 *
 * Mettre NEXT_PUBLIC_LEAD_WEBHOOK à une chaîne vide désactive le miroir.
 */
const WEBHOOK =
  process.env.NEXT_PUBLIC_LEAD_WEBHOOK ??
  "https://n8n.srv1688718.hstgr.cloud/webhook/lead-capture";

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

/**
 * Recopie la demande vers n8n, sans jamais faire attendre le visiteur ni
 * risquer de lui montrer une erreur : sa demande est déjà enregistrée.
 *
 * `keepalive` garantit que la requête part même si l'onglet se ferme dans la
 * seconde qui suit. L'échec est silencieux pour le visiteur, bruyant en
 * console : c'est là qu'on ira voir si les leads n'arrivent pas dans n8n.
 */
function mirrorToWebhook(body: string): void {
  if (!WEBHOOK) return;

  fetch(WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  })
    .then((res) => {
      if (!res.ok) {
        console.warn(`[lead] miroir n8n : réponse ${res.status}`);
      }
    })
    .catch(() => {
      console.warn(
        "[lead] miroir n8n injoignable — vérifier « Allowed Origins (CORS) » " +
          "sur le nœud Webhook, qui doit autoriser le domaine du site.",
      );
    });
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const invalid = validate(payload);
  if (invalid) return { ok: false, error: invalid };

  const body = JSON.stringify({
    ...payload,
    // Horodatage côté client, à titre indicatif seulement : le point de
    // réception doit reposer sur sa propre horloge.
    submittedAt: new Date().toISOString(),
  });

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    if (!res.ok) {
      return {
        ok: false,
        error:
          "Votre demande n'a pas pu être transmise. Appelez-nous directement, c'est le plus rapide.",
      };
    }

    // Le lead est accepté : on en envoie une copie à n8n. Volontairement après
    // coup et sans `await` — le miroir ne doit ni ralentir la confirmation, ni
    // recevoir des demandes que le point de réception a refusées.
    mirrorToWebhook(body);

    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Connexion impossible. Vérifiez votre réseau, ou appelez-nous directement.",
    };
  }
}
