/**
 * Événements poussés dans le dataLayer de Google Tag Manager.
 *
 * Sans ces événements, GTM ne voit que des pages vues : aucune conversion à
 * remonter, et Google Ads n'a rien sur quoi optimiser. C'est le complément
 * indispensable de l'installation du conteneur.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ NOMS D'ÉVÉNEMENTS — à faire correspondre dans GTM                       │
 * │                                                                          │
 * │ tel_click     Clic sur un numéro de téléphone, où qu'il soit             │
 * │ devis_click   Clic vers la page de devis depuis un CTA                   │
 * │ form_step_1   Première étape validée — le prospect devient rappelable    │
 * │ form_submit   Formulaire complet envoyé                                  │
 * │                                                                          │
 * │ Ce sont des noms de travail en snake_case, lisibles dans l'interface de  │
 * │ GTM. Si vos conventions diffèrent, ils se changent ici et nulle part     │
 * │ ailleurs : le reste du code passe par les fonctions ci-dessous.          │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/**
 * Pousse un événement. Silencieux si le dataLayer n'existe pas — c'est le cas
 * quand NEXT_PUBLIC_GTM_ID est vide, ou avant le chargement du conteneur.
 * Un échec de mesure ne doit jamais casser un parcours de conversion.
 */
export function track(event: string, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...payload });
  } catch {
    // Volontairement muet.
  }
}

/* -------------------------------------------------------------------------- */
/*  Événements nommés — le reste du code n'écrit jamais de chaîne en dur       */
/* -------------------------------------------------------------------------- */

export const analytics = {
  telClick: (phone: string, from: string) => track("tel_click", { phone, from }),

  devisClick: (from: string) => track("devis_click", { from }),

  /**
   * Première étape validée. C'est la conversion la plus importante à suivre :
   * le lead partiel est déjà enregistré, le prospect est rappelable même s'il
   * abandonne ensuite.
   */
  formStep1: (kind: "quote" | "repair", data: Record<string, unknown>) =>
    track("form_step_1", { form_kind: kind, ...data }),

  formSubmit: (kind: "quote" | "repair", data: Record<string, unknown>) =>
    track("form_submit", { form_kind: kind, ...data }),
};
