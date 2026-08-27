"use client";

import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { submitLead, type LeadPayload } from "@/lib/lead";
import { site } from "@/lib/site";
import s from "./QuoteForm.module.scss";

/**
 * Formulaire qualifiant en 3 étapes (§22 du cadrage).
 * L'étape 1 enregistre déjà le lead : un prospect qui abandonne ensuite
 * reste rappelable. C'est ce qui permet d'être à la fois court et qualifiant.
 */

const SERVICES = [
  "Nettoyage de hotte",
  "Dégraissage de hotte",
  "Ramonage de conduit",
  "Entretien du réseau complet",
  "Contrat d'entretien",
  "Je ne sais pas encore",
];

const ESTABLISHMENTS = [
  "Restaurant",
  "Brasserie / bistrot",
  "Hôtel",
  "Fast-food / snack",
  "Pizzeria",
  "Kebab",
  "Boulangerie / pâtisserie",
  "Boucherie / traiteur",
  "Cuisine centrale",
  "Cuisine collective / cantine",
  "EHPAD / établissement de santé",
  "Restaurant d'entreprise",
  "Autre",
];

const NETWORKS = [
  "Hotte seule",
  "Hotte + conduit",
  "Réseau complet jusqu'au rejet",
  "Je ne sais pas",
];

const initial: LeadPayload = {
  stage: "partial",
  service: SERVICES[0],
  city: "",
  postalCode: "",
  phone: "",
  establishment: ESTABLISHMENTS[0],
  hoods: "1",
  network: NETWORKS[3],
  urgency: "Planifié",
  company: "",
  name: "",
  email: "",
  message: "",
};

export function QuoteForm({
  defaultService,
  defaultCity,
  compact = false,
}: {
  defaultService?: string;
  defaultCity?: string;
  compact?: boolean;
}) {
  const pathname = usePathname();

  /**
   * La page transmet le libellé exact de sa prestation. S'il ne figure pas
   * dans la liste standard, il faut l'ajouter en tête : un <select> contrôlé
   * dont la valeur ne correspond à aucune option s'affiche VIDE — le champ
   * paraissait donc non renseigné sur chaque page prestation, alors même que
   * le pré-remplissage était le but.
   *
   * Le conserver tel quel a un second avantage : le lead porte la prestation
   * précise de la page d'origine, pas une catégorie approximative.
   */
  const serviceOptions =
    defaultService && !SERVICES.includes(defaultService)
      ? [defaultService, ...SERVICES]
      : SERVICES;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [data, setData] = useState<LeadPayload>({
    ...initial,
    service: defaultService ?? initial.service,
    city: defaultCity ?? "",
  });
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();

  function set<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function goToStep2(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    start(async () => {
      // Enregistrement du lead partiel : le prospect devient rappelable ici.
      const res = await submitLead({ ...data, stage: "partial", source: pathname });
      if (!res.ok) {
        setError(res.error ?? "Une erreur est survenue.");
        return;
      }
      setStep(2);
    });
  }

  function finish(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    start(async () => {
      const res = await submitLead({ ...data, stage: "complete", source: pathname });
      if (!res.ok) {
        setError(res.error ?? "Une erreur est survenue.");
        return;
      }
      setStep(4);
    });
  }

  if (step === 4) {
    return (
      <div className={s.form} data-compact={compact || undefined}>
        <div className={s.done}>
          <p className={s.doneKicker}>Demande enregistrée</p>
          <h3>Nous vous rappelons sous 2 h ouvrées</h3>
          <p>
            Votre devis vous parvient sous 24 h. Si votre situation est urgente, appelez-nous
            directement — c&apos;est toujours le plus rapide.
          </p>
          <a href={`tel:${site.phone.href}`} className="btn btn--block">
            Appeler le {site.phone.display}
          </a>
          <p className={s.note}>
            Vous pouvez aussi nous écrire à{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> — c&apos;est là que vous
            enverrez vos photos d&apos;installation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.form} data-compact={compact || undefined}>
      <div className={s.head}>
        <p className={s.kicker}>Devis gratuit</p>
        <h3>{step === 1 ? "Décrivez votre besoin en 30 secondes" : "Précisez votre installation"}</h3>
        <ol className={s.steps} aria-label="Progression">
          {[1, 2, 3].map((n) => (
            <li key={n} data-state={step === n ? "current" : step > n ? "done" : "todo"}>
              <span className="srOnly">Étape </span>
              {n}
            </li>
          ))}
        </ol>
      </div>

      {step === 1 && (
        <form onSubmit={goToStep2} className={s.body}>
          <div className={s.field}>
            <label htmlFor="qf-service">Prestation recherchée</label>
            <select
              id="qf-service"
              value={data.service}
              onChange={(e) => set("service", e.target.value)}
            >
              {serviceOptions.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className={s.field}>
            <label htmlFor="qf-establishment">Type d&apos;établissement</label>
            <select
              id="qf-establishment"
              value={data.establishment}
              onChange={(e) => set("establishment", e.target.value)}
            >
              {ESTABLISHMENTS.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className={s.row}>
            <div className={s.field}>
              <label htmlFor="qf-city">Ville</label>
              <input
                id="qf-city"
                type="text"
                autoComplete="address-level2"
                value={data.city}
                onChange={(e) => set("city", e.target.value)}
                required
              />
            </div>
            <div className={`${s.field} ${s.fieldNarrow}`}>
              <label htmlFor="qf-cp">Code postal</label>
              <input
                id="qf-cp"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                value={data.postalCode}
                onChange={(e) => set("postalCode", e.target.value)}
              />
            </div>
          </div>

          <div className={s.field}>
            <label htmlFor="qf-phone">Téléphone</label>
            <input
              id="qf-phone"
              type="tel"
              autoComplete="tel"
              placeholder="06 12 34 56 78"
              value={data.phone}
              onChange={(e) => set("phone", e.target.value)}
              required
            />
          </div>

          {error && (
            <p className={s.error} role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn--block" disabled={pending}>
            {pending ? "Envoi…" : "Continuer"}
          </button>
          <p className={s.note}>
            Nous vous rappelons sous 2 h ouvrées. Aucune donnée transmise à un tiers.
          </p>
        </form>
      )}

      {step === 2 && (
        <form
          className={s.body}
          onSubmit={(e) => {
            e.preventDefault();
            setStep(3);
          }}
        >
          <div className={s.row}>
            <div className={`${s.field} ${s.fieldNarrow}`}>
              <label htmlFor="qf-hoods">Nombre de hottes</label>
              <input
                id="qf-hoods"
                type="number"
                min="1"
                max="50"
                value={data.hoods}
                onChange={(e) => set("hoods", e.target.value)}
              />
            </div>
            <div className={s.field}>
              <label htmlFor="qf-network">Système d&apos;extraction</label>
              <select
                id="qf-network"
                value={data.network}
                onChange={(e) => set("network", e.target.value)}
              >
                {NETWORKS.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          <fieldset className={s.fieldset}>
            <legend>Votre besoin est-il urgent ?</legend>
            <div className={s.choices}>
              {["Planifié", "Sous 15 jours", "Urgent"].map((v) => (
                <label key={v} className={s.choice} data-selected={data.urgency === v || undefined}>
                  <input
                    type="radio"
                    name="urgency"
                    value={v}
                    checked={data.urgency === v}
                    onChange={() => set("urgency", v)}
                  />
                  {v}
                </label>
              ))}
            </div>
          </fieldset>

          <div className={s.actions}>
            <button type="button" className="btn btn--ghost" onClick={() => setStep(1)}>
              Retour
            </button>
            <button type="submit" className="btn">
              Continuer
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={finish} className={s.body}>
          <div className={s.field}>
            <label htmlFor="qf-company">Établissement / société</label>
            <input
              id="qf-company"
              type="text"
              autoComplete="organization"
              value={data.company}
              onChange={(e) => set("company", e.target.value)}
            />
          </div>

          <div className={s.row}>
            <div className={s.field}>
              <label htmlFor="qf-name">Votre nom</label>
              <input
                id="qf-name"
                type="text"
                autoComplete="name"
                value={data.name}
                onChange={(e) => set("name", e.target.value)}
                required
              />
            </div>
            <div className={s.field}>
              <label htmlFor="qf-email">E-mail</label>
              <input
                id="qf-email"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className={s.field}>
            <label htmlFor="qf-message">
              Précisions <span className={s.optional}>(facultatif)</span>
            </label>
            <textarea
              id="qf-message"
              rows={3}
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Dernier entretien, contraintes horaires, demande de votre assureur…"
            />
          </div>

          <p className={s.note}>
            Des photos de votre installation accélèrent le chiffrage. Vous pourrez nous les envoyer
            par retour de mail dès réception de votre demande.
          </p>

          {error && (
            <p className={s.error} role="alert">
              {error}
            </p>
          )}

          <div className={s.actions}>
            <button type="button" className="btn btn--ghost" onClick={() => setStep(2)}>
              Retour
            </button>
            <button type="submit" className="btn" disabled={pending}>
              {pending ? "Envoi…" : "Recevoir mon devis"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
