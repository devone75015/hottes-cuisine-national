import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageNarrow } from "@/components/ui/PageShell";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name}.`,
  path: "/mentions-legales/",
  noindex: true,
  image: "home-og",
});

export default function LegalPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ name: "Mentions légales", path: "/mentions-legales/" }]} />

      <PageNarrow>
        <div>
          <h1>Mentions légales</h1>
        </div>

        <div className={p.notice}>
          <h3>Page à compléter avant mise en ligne</h3>
          <p>
            Les mentions légales sont obligatoires et doivent contenir les informations réelles de
            l&apos;entreprise. Les champs ci-dessous sont des emplacements à renseigner.{" "}
            <span className={p.todo}>À compléter</span>
          </p>
        </div>

        <div className={p.legal}>
          <h2>Éditeur du site</h2>
          <ul>
            <li>Raison sociale : {site.legalName}</li>
            <li>Forme juridique et capital social : à compléter</li>
            <li>Adresse du siège social : à compléter</li>
            <li>Numéro SIREN / SIRET : à compléter</li>
            <li>Numéro de TVA intracommunautaire : à compléter</li>
            <li>Numéro RCS et ville d&apos;immatriculation : à compléter</li>
            <li>Directeur de la publication : à compléter</li>
            <li>Téléphone : {site.phone.display}</li>
            <li>E-mail : {site.email}</li>
          </ul>

          <h2>Hébergement</h2>
          <ul>
            <li>Nom de l&apos;hébergeur : à compléter</li>
            <li>Adresse : à compléter</li>
            <li>Téléphone : à compléter</li>
          </ul>

          <h2>Assurance professionnelle</h2>
          <ul>
            <li>Compagnie : à compléter</li>
            <li>Numéro de contrat : à compléter</li>
            <li>Couverture géographique : à compléter</li>
          </ul>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site — textes, schémas techniques,
            photographies, éléments graphiques et structure — est protégé par le droit de la
            propriété intellectuelle. Toute reproduction, représentation ou adaptation, totale ou
            partielle, sans autorisation écrite préalable, est interdite.
          </p>

          <h2>Contenus techniques et réglementaires</h2>
          <p>
            Les informations techniques publiées sur ce site sont fournies à titre d&apos;information
            générale. Elles ne se substituent ni à un diagnostic réalisé sur votre installation, ni
            aux obligations qui vous incombent au titre de votre activité, du règlement sanitaire
            applicable dans votre département ou de votre contrat d&apos;assurance. Nous vous invitons à
            vérifier ces obligations auprès des autorités et organismes compétents.
          </p>

          <h2>Liens externes</h2>
          <p>
            Ce site peut contenir des liens vers des sites tiers. Nous n&apos;exerçons aucun contrôle
            sur ces sites et déclinons toute responsabilité quant à leur contenu.
          </p>
        </div>
      </PageNarrow>
    </>
  );
}
