"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { regions } from "@/data/regions";
import { cities } from "@/data/cities";
import s from "./ZoneFinder.module.scss";

/**
 * Routeur géographique du hero : à partir d'un code postal, on résout le
 * département, puis la région, et on envoie vers la page la plus précise
 * qui existe réellement (ville tier 1 si disponible, sinon hub région).
 */

/** Table code département → slug de région, dérivée des données régions. */
const DEPT_TO_REGION = new Map<string, string>(
  regions.flatMap((r) => r.departments.map((d) => [d.code, r.slug] as const)),
);

function departmentFromPostalCode(cp: string): string | null {
  const digits = cp.replace(/\D/g, "");
  if (digits.length < 2) return null;

  // Corse : 200xx / 201xx → 2A, 202xx à 206xx → 2B (approximation usuelle).
  if (digits.startsWith("20")) {
    const n = Number(digits.slice(0, 3));
    return n <= 201 ? "2A" : "2B";
  }

  // DOM non couverts (métropole uniquement).
  if (digits.startsWith("97") || digits.startsWith("98")) return null;

  return digits.slice(0, 2);
}

export function ZoneFinder() {
  const router = useRouter();
  const [cp, setCp] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const dept = departmentFromPostalCode(cp);

    if (!dept) {
      setError("Nous intervenons en France métropolitaine. Vérifiez le code postal saisi.");
      return;
    }

    const region = DEPT_TO_REGION.get(dept);
    if (!region) {
      setError("Code postal non reconnu. Appelez-nous, nous couvrons toute la métropole.");
      return;
    }

    const city = cities.find((c) => c.departmentCode === dept);
    setError(null);
    router.push(city ? `/nettoyage-hotte-restaurant/${city.slug}/` : `/zones/${region}/`);
  }

  return (
    <form className={s.finder} onSubmit={onSubmit}>
      <label htmlFor="zone-cp" className={s.label}>
        Votre code postal
      </label>
      <div className={s.row}>
        <input
          id="zone-cp"
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="69001"
          value={cp}
          onChange={(e) => {
            setCp(e.target.value);
            setError(null);
          }}
          aria-describedby={error ? "zone-error" : undefined}
        />
        <button type="submit" className="btn">
          Voir ma zone
        </button>
      </div>
      {error && (
        <p className={s.error} id="zone-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
