"use client";

import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { submitLead, type LeadPayload } from "@/lib/lead";
import { site } from "@/lib/site";
import s from "./QuoteForm.module.scss";
import r from "./RepairForm.module.scss";

/**
 * Formulaire de dépannage (§14 du brief réparation).
 *
 * Différence de fond avec le formulaire de devis : ici le prospect a une panne
 * en cours. L'étape 1 ne cherche donc pas à qualifier commercialement mais à
 * établir DEUX choses — la cuisine est-elle arrêtée, et où se trouve-t-elle.
 * C'est ce qui permet de prioriser l'appel de rappel.
 *
 * Le lead partiel part dès la validation de l'étape 1, comme sur le devis.
 */

const SYMPTOMS = [
  "Hotte totalement arrêtée",
  "Aspiration insuffisante",
  "Bruit anormal",
  "Vibrations",
  "Courroie (cassée, détendue)",
  "Moteur (ne démarre plus, chauffe)",
  "Extracteur / tourelle",
  "Problème électrique constaté",
  "Je ne sais pas",
];

const STATES = [
  { v: "Arrêt complet", hint: "La cuisine ne peut plus fonctionner" },
  { v: "Fonctionnement dégradé", hint: "Ça tourne, mais mal" },
  { v: "Signe avant-coureur", hint: "Bruit ou baisse récente" },
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

export function RepairForm({ defaultCity }: { defaultCity?: string }) {
  const pathname = usePathname();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const [data, setData] = useState<LeadPayload>({
    stage: "partial",
    kind: "repair",
    symptoms: [],
    state: STATES[0].v,
    city: defaultCity ?? "",
    postalCode: "",
    phone: "",
    establishment: ESTABLISHMENTS[0],
    brand: "",
    model: "",
    urgency: "Dès que possible",
    hasMedia: false,
    company: "",
    name: "",
    email: "",
    message: "",
  });

  function set<K extends keyof LeadPayload>(k: K, v: LeadPayload[K]) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function toggleSymptom(v: string) {
    setData((d) => {
      const cur = d.symptoms ?? [];
      return { ...d, symptoms: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] };
    });
  }

  const urgent = data.state === STATES[0].v;

  function goStep2(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    start(async () => {
      const res = await submitLead({ ...data, stage: "partial", source: pathname });
      if (!res.ok) return setError(res.error ?? "Une erreur est survenue.");
      setStep(2);
    });
  }

  function finish(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    start(async () => {
      const res = await submitLead({ ...data, stage: "complete", source: pathname });
      if (!res.ok) return setError(res.error ?? "Une erreur est survenue.");
      setStep(4);
    });
  }

  if (step === 4) {
    return (
      <div className={`${s.form} ${r.form}`}>
        <div className={s.done}>
          <p className={s.doneKicker}>Demande transmise</p>
          <h3>{urgent ? "Votre demande est traitée en priorité" : "Nous vous rappelons rapidement"}</h3>
          <p>
            {urgent
              ? "Une cuisine à l'arrêt passe devant. Si vous ne souhaitez pas attendre notre rappel, appelez-nous directement — c'est toujours le plus rapide."
              : "Nous vous rappelons sous 2 h ouvrées pour qualifier la panne et convenir d'un créneau de diagnostic."}
          </p>
          <a href={`tel:${site.phone.href}`} className="btn btn--block">
            Appeler le {site.phone.display}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`${s.form} ${r.form}`} data-urgent={urgent || undefined}>
      <div className={s.head}>
        <p className={s.kicker}>Demande de dépannage</p>
        <h3>{step === 1 ? "Décrivez la panne" : step === 2 ? "Votre installation" : "Vos coordonnées"}</h3>
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
        <form onSubmit={goStep2} className={s.body}>
          <fieldset className={s.fieldset}>
            <legend>Où en est votre installation ?</legend>
            <div className={r.states}>
              {STATES.map((st) => (
                <label key={st.v} className={r.state} data-selected={data.state === st.v || undefined}>
                  <input
                    type="radio"
                    name="state"
                    checked={data.state === st.v}
                    onChange={() => set("state", st.v)}
                  />
                  <span className={r.stateName}>{st.v}</span>
                  <span className={r.stateHint}>{st.hint}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className={s.fieldset}>
            <legend>
              Ce que vous constatez <span className={s.optional}>(plusieurs choix possibles)</span>
            </legend>
            <div className={s.choices}>
              {SYMPTOMS.map((v) => (
                <label
                  key={v}
                  className={s.choice}
                  data-selected={data.symptoms?.includes(v) || undefined}
                >
                  <input
                    type="checkbox"
                    checked={data.symptoms?.includes(v) ?? false}
                    onChange={() => toggleSymptom(v)}
                  />
                  {v}
                </label>
              ))}
            </div>
          </fieldset>

          <div className={s.row}>
            <div className={s.field}>
              <label htmlFor="rf-city">Ville</label>
              <input
                id="rf-city"
                type="text"
                autoComplete="address-level2"
                value={data.city}
                onChange={(e) => set("city", e.target.value)}
                required
              />
            </div>
            <div className={s.field}>
              <label htmlFor="rf-cp">Code postal</label>
              <input
                id="rf-cp"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                value={data.postalCode}
                onChange={(e) => set("postalCode", e.target.value)}
              />
            </div>
          </div>

          <div className={s.field}>
            <label htmlFor="rf-phone">Téléphone</label>
            <input
              id="rf-phone"
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

          {urgent && (
            <p className={r.urgentNote}>
              Cuisine à l&apos;arrêt : appelez-nous plutôt que d&apos;attendre le rappel.{" "}
              <a href={`tel:${site.phone.href}`}>{site.phone.display}</a>
            </p>
          )}

          <button type="submit" className="btn btn--block" disabled={pending}>
            {pending ? "Envoi…" : "Continuer"}
          </button>
          <p className={s.note}>
            Nous ne posons aucun diagnostic à distance. Ces éléments servent à prioriser votre
            demande et à préparer l&apos;intervention.
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
          <div className={s.field}>
            <label htmlFor="rf-estab">Type d&apos;établissement</label>
            <select
              id="rf-estab"
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
              <label htmlFor="rf-brand">
                Marque de la hotte <span className={s.optional}>(si connue)</span>
              </label>
              <input
                id="rf-brand"
                type="text"
                value={data.brand}
                onChange={(e) => set("brand", e.target.value)}
              />
            </div>
            <div className={s.field}>
              <label htmlFor="rf-model">
                Modèle <span className={s.optional}>(si connu)</span>
              </label>
              <input
                id="rf-model"
                type="text"
                value={data.model}
                onChange={(e) => set("model", e.target.value)}
              />
            </div>
          </div>

          <fieldset className={s.fieldset}>
            <legend>Délai souhaité</legend>
            <div className={s.choices}>
              {["Dès que possible", "Sous 48 h", "Cette semaine", "Intervention planifiée"].map((v) => (
                <label key={v} className={s.choice} data-selected={data.urgency === v || undefined}>
                  <input
                    type="radio"
                    name="urgency"
                    checked={data.urgency === v}
                    onChange={() => set("urgency", v)}
                  />
                  {v}
                </label>
              ))}
            </div>
          </fieldset>

          <label className={r.media}>
            <input
              type="checkbox"
              checked={data.hasMedia ?? false}
              onChange={(e) => set("hasMedia", e.target.checked)}
            />
            <span>
              <b>Je peux envoyer des photos ou une courte vidéo</b>
              Sur une panne mécanique, une vidéo de quelques secondes du bruit au démarrage vaut
              souvent mieux qu&apos;une longue description.
            </span>
          </label>

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
            <label htmlFor="rf-company">Établissement / société</label>
            <input
              id="rf-company"
              type="text"
              autoComplete="organization"
              value={data.company}
              onChange={(e) => set("company", e.target.value)}
            />
          </div>

          <div className={s.row}>
            <div className={s.field}>
              <label htmlFor="rf-name">Votre nom</label>
              <input
                id="rf-name"
                type="text"
                autoComplete="name"
                value={data.name}
                onChange={(e) => set("name", e.target.value)}
                required
              />
            </div>
            <div className={s.field}>
              <label htmlFor="rf-email">E-mail</label>
              <input
                id="rf-email"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className={s.field}>
            <label htmlFor="rf-message">
              Précisions <span className={s.optional}>(facultatif)</span>
            </label>
            <textarea
              id="rf-message"
              rows={3}
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Depuis quand, apparition brutale ou progressive, dernier entretien connu, protection qui a déclenché…"
            />
          </div>

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
              {pending ? "Envoi…" : "Demander un dépannage"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
