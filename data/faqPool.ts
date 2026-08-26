import type { City, Faq, Service } from "@/lib/types";

/**
 * Pool de FAQ rotatif (§18 du cadrage).
 *
 * Chaque page locale reçoit 3 questions tirées de ce pool, par une sélection
 * DÉTERMINISTE fondée sur un hash de (ville + prestation). Deux pages voisines
 * n'affichent donc jamais le même jeu, et le rendu reste stable d'un build à
 * l'autre — condition nécessaire à la génération statique.
 */

type PoolEntry = (sv: Service, city: City) => Faq;

const POOL: PoolEntry[] = [
  (sv, city) => ({
    q: `Combien coûte ${sv.h1.toLowerCase()} ${city.prep} ?`,
    a: `Le prix dépend du nombre et de la longueur des hottes, du type de filtres, de l'état d'encrassement, de l'accessibilité du réseau et du créneau horaire demandé. Nous établissons un devis gratuit sous 24 h après un échange de quelques minutes ; l'envoi de photos permet de chiffrer précisément dès le premier contact.`,
  }),
  (_sv, city) => ({
    q: `Sous quel délai pouvez-vous intervenir ${city.prep} ?`,
    a: `Nos plannings sont organisés par secteur sur ${city.epci}, ce qui nous permet de proposer des créneaux rapprochés. Le délai exact vous est confirmé au devis, en fonction du créneau horaire que vous souhaitez et de l'ampleur de l'intervention.`,
  }),
  (_sv, city) => ({
    q: `Intervenez-vous en dehors des heures de service ${city.prep} ?`,
    a: `Oui, systématiquement. Coupure de l'après-midi, avant l'ouverture, après le dernier service, de nuit ou un jour de fermeture : le créneau est choisi avec vous et l'intervention est terminée avant la reprise.`,
  }),
  (_sv, _city) => ({
    q: "Faut-il vider la cuisine avant votre arrivée ?",
    a: "Non. Nous protégeons nous-mêmes le poste de cuisson, les plans de travail et les sols, et nous apportons l'ensemble du matériel, bacs de trempage compris. Il vous suffit de dégager les denrées et ustensiles posés directement sous la hotte.",
  }),
  (_sv, _city) => ({
    q: "Que se passe-t-il si une partie du réseau est inaccessible ?",
    a: "Nous le mentionnons explicitement dans le rapport d'intervention, avec le motif. Un réseau sans trappe de visite ne peut pas être traité sur toute sa longueur : nous vous indiquons alors les zones non traitées et les solutions possibles, sans jamais laisser croire que l'ensemble a été nettoyé.",
  }),
  (_sv, _city) => ({
    q: "Vos produits sont-ils compatibles avec une cuisine alimentaire ?",
    a: "Oui : dégraissants alcalins professionnels compatibles avec un environnement de production alimentaire, appliqués puis intégralement rincés. Les fiches de données de sécurité sont disponibles sur demande.",
  }),
  (_sv, city) => ({
    q: `Traitez-vous les communes autour de ${city.name} ?`,
    a: `Oui : ${city.nearby.slice(0, 6).join(", ")} et les autres communes du périmètre de ${city.epci}. Si votre commune n'apparaît pas dans nos listes, appelez-nous — nos tournées couvrent un périmètre plus large.`,
  }),
  (_sv, _city) => ({
    q: "Proposez-vous un contrat d'entretien annuel ?",
    a: "Oui. Une installation suivie se traite en une fraction du temps nécessaire à une remise à niveau, ce qui rend le contrat plus économique qu'une succession d'interventions ponctuelles. Il précise le nombre de passages, le périmètre traité et le tarif de chaque intervention.",
  }),
  (_sv, _city) => ({
    q: "Que devient la graisse retirée pendant l'intervention ?",
    a: "Les résidus sont récupérés au fur et à mesure, conditionnés et évacués par nos soins conformément à la réglementation applicable aux déchets d'activité. Rien n'est poussé plus loin dans le réseau ni laissé sur place.",
  }),
  (_sv, _city) => ({
    q: "Intervenez-vous en urgence, avant un contrôle ou une réouverture ?",
    a: "Oui, dans la limite des créneaux disponibles. Une intervention en urgence se planifie moins bien et coûte davantage : dès que la date d'un contrôle ou d'une réouverture est connue, mieux vaut nous appeler quelques semaines à l'avance.",
  }),
  (_sv, _city) => ({
    q: "Êtes-vous assurés pour intervenir dans notre établissement ?",
    a: "Oui, nous disposons d'une assurance responsabilité civile professionnelle couvrant nos interventions. L'attestation vous est transmise sur demande, avant l'intervention si votre établissement l'exige.",
  }),
  (sv, _city) => ({
    q: `${sv.nav} : combien de temps dure l'intervention ?`,
    a: "De quelques heures pour une cuisine de restaurant sur une installation suivie, à une ou plusieurs journées pour une première remise à niveau ou une installation multi-postes. La durée estimée figure au devis, après repérage.",
  }),
];

/** Hash stable — même entrée, même sortie à chaque build. */
function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/** Trois questions du pool, sans doublon, propres au couple prestation + ville. */
export function localFaqFor(sv: Service, city: City, count = 3): Faq[] {
  const seed = hash(`${city.slug}::${sv.slug}`);
  const picked: Faq[] = [];
  const used = new Set<number>();

  for (let i = 0; picked.length < count && i < POOL.length * 2; i++) {
    const idx = (seed + i * 5 + Math.floor(seed / (i + 3))) % POOL.length;
    if (used.has(idx)) continue;
    used.add(idx);
    picked.push(POOL[idx](sv, city));
  }

  return picked;
}
