"use client";

import Link from "next/link";
import { useState } from "react";
import s from "./ExtractionDiagram.module.scss";

/**
 * PIÈCE SIGNATURE DU SITE.
 *
 * Coupe technique du réseau d'extraction, de la hotte au rejet en toiture.
 * Chaque élément est un lien vers sa page — c'est aussi le meilleur bloc de
 * maillage interne du site (§20 du cadrage).
 *
 * Deux états : réseau traité / réseau encrassé. Le second assombrit
 * progressivement les parois et fait chuter le flux d'air.
 */

type Part = {
  id: string;
  label: string;
  index: string;
  blurb: string;
  href: string;
};

const PARTS: Part[] = [
  {
    id: "hotte",
    index: "01",
    label: "La hotte",
    blurb:
      "Capte les aérosols de graisse au-dessus du poste de cuisson. Caisson, parois internes, jonctions et éclairage.",
    href: "/nettoyage-hotte-professionnelle/",
  },
  {
    id: "filtres",
    index: "02",
    label: "Les filtres",
    blurb:
      "Première barrière du système. Filtres à chocs, à cassettes ou à charbon : ce qu'ils ne retiennent pas part dans le conduit.",
    href: "/nettoyage-filtres-hotte/",
  },
  {
    id: "plenum",
    index: "03",
    label: "Le plénum",
    blurb:
      "Chambre de répartition située derrière les filtres. Zone d'accumulation majeure, invisible sans démontage.",
    href: "/degraissage-hotte-professionnelle/",
  },
  {
    id: "conduit",
    index: "04",
    label: "Le conduit",
    blurb:
      "Section verticale et coudes. C'est là que le dépôt polymérise et que la section utile se réduit.",
    href: "/ramonage-conduit-hotte/",
  },
  {
    id: "gaine",
    index: "05",
    label: "La gaine",
    blurb:
      "Tronçons horizontaux, souvent en faux plafond. La graisse n'y s'écoule pas : elle stagne au point bas.",
    href: "/nettoyage-gaine-extraction/",
  },
  {
    id: "extracteur",
    index: "06",
    label: "L'extracteur",
    blurb:
      "Caisson, turbine et volute. Une turbine chargée se déséquilibre, perd du débit et sur-consomme.",
    href: "/nettoyage-reseau-extraction/",
  },
  {
    id: "rejet",
    index: "07",
    label: "Le rejet",
    blurb:
      "Sortie en toiture et ses abords immédiats. Dernier point du réseau, rarement inspecté.",
    href: "/extraction-cuisine-professionnelle/",
  },
];

export function ExtractionDiagram() {
  const [active, setActive] = useState<string>("conduit");
  const [soiled, setSoiled] = useState(false);
  const current = PARTS.find((p) => p.id === active) ?? PARTS[0];

  return (
    <div className={s.wrap} data-soiled={soiled || undefined}>
      <div className={s.head}>
        <div>
          <p className="eyebrow eyebrow--air">Le réseau en coupe</p>
          <h2>De la hotte au rejet, sept éléments et une seule chaîne</h2>
          <p className={s.intro}>
            Traiter un élément sans les autres ne règle jamais durablement le problème. Parcourez la
            coupe : chaque élément mène à sa prestation.
          </p>
        </div>
        <button
          type="button"
          className={s.toggle}
          onClick={() => setSoiled((v) => !v)}
          aria-pressed={soiled}
        >
          <span className={s.toggleDot} aria-hidden="true" />
          {soiled ? "Voir le réseau traité" : "Voir le réseau encrassé"}
        </button>
      </div>

      <div className={s.stage}>
        <div className={s.svgHolder}>
          <svg
            viewBox="0 0 900 540"
            className={s.svg}
            role="img"
            aria-label="Coupe technique d'un système d'extraction de cuisine professionnelle, de la hotte au rejet en toiture"
          >
            <defs>
              <linearGradient id="inox" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c9d4d8" />
                <stop offset="45%" stopColor="#eef2f3" />
                <stop offset="55%" stopColor="#dbe3e6" />
                <stop offset="100%" stopColor="#b6c4c9" />
              </linearGradient>
              <linearGradient id="inoxV" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#b6c4c9" />
                <stop offset="40%" stopColor="#eef2f3" />
                <stop offset="60%" stopColor="#d3dde0" />
                <stop offset="100%" stopColor="#a9b8be" />
              </linearGradient>
              <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#c2451b" />
                <stop offset="100%" stopColor="#e8a33f" stopOpacity="0" />
              </linearGradient>
              <pattern id="grease" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="6" height="6" fill="#5a3a20" />
                <circle cx="2" cy="2" r="1.6" fill="#3c2412" />
                <circle cx="5" cy="4.5" r="1.1" fill="#482c17" />
              </pattern>
            </defs>

            {/* ---------- Bâtiment ---------- */}
            <g className={s.building}>
              <path d="M60 120 H860 V500 H60 Z" className={s.wall} />
              <path d="M60 120 H860" className={s.roofLine} />
              <path d="M60 300 H860 M60 410 H860" className={s.floorLine} />
            </g>

            {/* ---------- Poste de cuisson ---------- */}
            <g className={s.stove}>
              <rect x="150" y="430" width="270" height="14" rx="2" fill="url(#inox)" />
              <rect x="162" y="444" width="246" height="46" rx="2" className={s.stoveBody} />
              <g className={s.flames} aria-hidden="true">
                <path d="M210 430 q10 -34 20 -50 q10 16 20 50 Z" fill="url(#flameGrad)" />
                <path d="M280 430 q10 -28 20 -42 q10 14 20 42 Z" fill="url(#flameGrad)" />
                <path d="M348 430 q8 -24 16 -36 q8 12 16 36 Z" fill="url(#flameGrad)" />
              </g>
            </g>

            {/* ---------- 05 GAINE (dessinée avant, passe derrière) ---------- */}
            <Link href="/nettoyage-gaine-extraction/" aria-label="La gaine horizontale — nettoyage de gaine d'extraction">
              <g
                className={s.part}
                data-part="gaine"
                data-active={active === "gaine" || undefined}
                onMouseEnter={() => setActive("gaine")}
                onFocus={() => setActive("gaine")}
              >
                <rect x="316" y="178" width="368" height="46" rx="3" fill="url(#inox)" className={s.metal} />
                <rect x="316" y="206" width="368" height="18" className={s.soil} fill="url(#grease)" />
                <path d="M420 178 v46 M520 178 v46 M620 178 v46" className={s.seam} />
                <circle cx="470" cy="201" r="9" className={s.hatch} />
                <circle cx="590" cy="201" r="9" className={s.hatch} />
              </g>
            </Link>

            {/* ---------- 04 CONDUIT ---------- */}
            <Link href="/ramonage-conduit-hotte/" aria-label="Le conduit vertical — ramonage de conduit de hotte">
              <g
                className={s.part}
                data-part="conduit"
                data-active={active === "conduit" || undefined}
                onMouseEnter={() => setActive("conduit")}
                onFocus={() => setActive("conduit")}
              >
                <path
                  d="M262 300 h56 v-98 a24 24 0 0 1 24 -24 h0 v46 h-4 a10 10 0 0 0 -10 10 v66 h-66 Z"
                  fill="url(#inoxV)"
                  className={s.metal}
                />
                <rect x="262" y="224" width="56" height="76" className={s.soilDuct} fill="url(#grease)" />
                <rect x="270" y="252" width="40" height="16" rx="2" className={s.hatchRect} />
                <path d="M262 262 h56" className={s.seam} />
              </g>
            </Link>

            {/* ---------- 03 PLÉNUM ---------- */}
            <Link href="/degraissage-hotte-professionnelle/" aria-label="Le plénum — dégraissage de hotte professionnelle">
              <g
                className={s.part}
                data-part="plenum"
                data-active={active === "plenum" || undefined}
                onMouseEnter={() => setActive("plenum")}
                onFocus={() => setActive("plenum")}
              >
                <rect x="196" y="300" width="188" height="42" rx="3" fill="url(#inox)" className={s.metal} />
                <rect x="196" y="326" width="188" height="16" className={s.soil} fill="url(#grease)" />
                <path d="M228 300 v42 M290 300 v42 M352 300 v42" className={s.seam} />
              </g>
            </Link>

            {/* ---------- 01 HOTTE ---------- */}
            <Link href="/nettoyage-hotte-professionnelle/" aria-label="La hotte — nettoyage de hotte professionnelle">
              <g
                className={s.part}
                data-part="hotte"
                data-active={active === "hotte" || undefined}
                onMouseEnter={() => setActive("hotte")}
                onFocus={() => setActive("hotte")}
              >
                <path
                  d="M162 342 H418 L438 402 H142 Z"
                  fill="url(#inox)"
                  className={s.metal}
                />
                <path d="M142 402 H438 v10 H142 Z" fill="url(#inoxV)" className={s.metal} />
                <path d="M150 388 H430" className={s.soilLine} />
                <circle cx="186" cy="396" r="4" className={s.lamp} />
                <circle cx="394" cy="396" r="4" className={s.lamp} />
              </g>
            </Link>

            {/* ---------- 02 FILTRES ---------- */}
            <Link href="/nettoyage-filtres-hotte/" aria-label="Les filtres — nettoyage des filtres de hotte">
              <g
                className={s.part}
                data-part="filtres"
                data-active={active === "filtres" || undefined}
                onMouseEnter={() => setActive("filtres")}
                onFocus={() => setActive("filtres")}
              >
                <rect x="206" y="346" width="168" height="42" rx="2" className={s.filterFrame} />
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <path
                    key={i}
                    d={`M${216 + i * 27} 384 l14 -34`}
                    className={s.filterBlade}
                  />
                ))}
                <rect x="206" y="346" width="168" height="42" className={s.soilFilter} fill="url(#grease)" />
              </g>
            </Link>

            {/* ---------- 06 EXTRACTEUR ---------- */}
            <Link href="/nettoyage-reseau-extraction/" aria-label="L'extracteur — nettoyage du réseau d'extraction">
              <g
                className={s.part}
                data-part="extracteur"
                data-active={active === "extracteur" || undefined}
                onMouseEnter={() => setActive("extracteur")}
                onFocus={() => setActive("extracteur")}
              >
                <rect x="684" y="150" width="108" height="102" rx="4" fill="url(#inox)" className={s.metal} />
                <circle cx="738" cy="201" r="34" className={s.turbineRing} />
                <g className={s.turbine}>
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <path
                      key={deg}
                      d="M738 201 L738 173"
                      className={s.blade}
                      transform={`rotate(${deg} 738 201)`}
                    />
                  ))}
                </g>
                <circle cx="738" cy="201" r="6" className={s.hub} />
              </g>
            </Link>

            {/* ---------- 07 REJET ---------- */}
            <Link href="/extraction-cuisine-professionnelle/" aria-label="Le rejet en toiture — entretien du système d'extraction">
              <g
                className={s.part}
                data-part="rejet"
                data-active={active === "rejet" || undefined}
                onMouseEnter={() => setActive("rejet")}
                onFocus={() => setActive("rejet")}
              >
                <rect x="716" y="60" width="44" height="92" fill="url(#inoxV)" className={s.metal} />
                <path d="M700 60 h76 l-14 -18 h-48 Z" fill="url(#inox)" className={s.metal} />
                <path d="M694 42 h88" className={s.cowl} />
              </g>
            </Link>

            {/* ---------- Flux d'air ---------- */}
            <g className={s.flow} aria-hidden="true">
              <path
                d="M290 420 V344 M290 344 V262 M290 224 Q290 200 322 200 H684 M792 200 H812 Q838 200 838 172 V96 H738 V60"
                className={s.flowPath}
              />
              <path
                d="M290 420 V344 M290 344 V262 M290 224 Q290 200 322 200 H684 M792 200 H812 Q838 200 838 172 V96 H738 V60"
                className={s.flowDash}
              />
            </g>

            {/* ---------- Repères numérotés ---------- */}
            <g className={s.markers} aria-hidden="true">
              {[
                { id: "hotte", x: 118, y: 372, n: "01" },
                { id: "filtres", x: 290, y: 332, n: "02" },
                { id: "plenum", x: 168, y: 322, n: "03" },
                { id: "conduit", x: 236, y: 262, n: "04" },
                { id: "gaine", x: 500, y: 156, n: "05" },
                { id: "extracteur", x: 738, y: 268, n: "06" },
                { id: "rejet", x: 690, y: 96, n: "07" },
              ].map((m) => (
                <g key={m.id} data-active={active === m.id || undefined} className={s.marker}>
                  <circle cx={m.x} cy={m.y} r="13" />
                  <text x={m.x} y={m.y + 4} textAnchor="middle">
                    {m.n}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>

        <div className={s.panel}>
          <ul className={s.list}>
            {PARTS.map((p) => (
              <li key={p.id}>
                <Link
                  href={p.href}
                  className={s.item}
                  data-active={active === p.id || undefined}
                  onMouseEnter={() => setActive(p.id)}
                  onFocus={() => setActive(p.id)}
                >
                  <span className={s.itemIndex}>{p.index}</span>
                  <span className={s.itemLabel}>{p.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={s.detail} aria-live="polite">
            <p className={s.detailIndex}>{current.index}</p>
            <h3>{current.label}</h3>
            <p className={s.detailBlurb}>{current.blurb}</p>
            <Link href={current.href} className="arrowLink">
              Voir la prestation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
