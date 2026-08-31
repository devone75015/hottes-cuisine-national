import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageNarrow } from "@/components/ui/PageShell";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import p from "../pages.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: `Traitement des données personnelles collectées sur ${site.name}.`,
  path: "/confidentialite/",
  noindex: true,
  image: "home-og",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ name: "Confidentialité", path: "/confidentialite/" }]} />

      <PageNarrow>
        <div>
          <h1>Politique de confidentialité</h1>
        </div>

        <div className={p.notice}>
          <h3>Page à finaliser avec le responsable de traitement</h3>
          <p>
            Le contenu ci-dessous décrit le fonctionnement réel du formulaire tel qu&apos;il est
            implémenté. Les mentions relatives à l&apos;identité du responsable de traitement, aux
            durées de conservation et aux sous-traitants doivent être complétées une fois les outils
            de destination arrêtés (CRM, e-mail transactionnel, mesure d&apos;audience).{" "}
            <span className={p.todo}>À compléter</span>
          </p>
        </div>

        <div className={p.legal}>
          <h2>Données collectées</h2>
          <p>
            Le formulaire de demande de devis collecte les données suivantes : prestation
            recherchée, type d&apos;établissement, ville, code postal, téléphone, puis, aux étapes
            suivantes, nombre de hottes, type de système d&apos;extraction, degré d&apos;urgence, raison
            sociale, nom, adresse e-mail et message libre.
          </p>
          <p>
            La page d&apos;origine de la demande est également enregistrée, afin de savoir à quelle
            prestation et à quelle zone géographique la demande se rattache.
          </p>

          <h2>Enregistrement dès la première étape</h2>
          <p>
            Les informations saisies à la première étape du formulaire sont enregistrées dès sa
            validation, avant que les étapes suivantes ne soient renseignées. Cela permet de vous
            rappeler si vous interrompez votre saisie. Si vous ne souhaitez pas être recontacté,
            écrivez-nous à {site.email} et votre demande sera supprimée.
          </p>

          <h2>Finalité</h2>
          <p>
            Ces données sont utilisées exclusivement pour vous recontacter, établir un devis et,
            le cas échéant, organiser une intervention. Elles ne sont ni vendues, ni cédées, ni
            transmises à des tiers à des fins commerciales.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Durée à préciser selon la politique interne : à compléter. Les demandes n&apos;ayant pas
            donné lieu à une relation commerciale sont supprimées au terme de cette durée.
          </p>

          <h2>Destinataires et sous-traitants</h2>
          <p>
            Destinataires internes : équipe commerciale et planification. Sous-traitants techniques
            (hébergement, envoi d&apos;e-mail, outil de suivi commercial) : à compléter une fois les
            outils retenus.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation et
            d&apos;opposition sur les données vous concernant, ainsi que du droit d&apos;introduire une
            réclamation auprès de la CNIL. Pour exercer ces droits, écrivez à {site.email}.
          </p>

          <h2>Mesure d&apos;audience et cookies</h2>
          <p>
            Ce site charge <strong>Google Tag Manager</strong> (conteneur{" "}
            {site.gtmId}), un gestionnaire de balises édité par Google. Il permet de
            déclencher des outils de mesure d&apos;audience et de suivi publicitaire sans
            modifier le code du site.
          </p>
          <p>
            La liste exacte des balises actives dans ce conteneur, les cookies qu&apos;elles
            déposent, leur durée de conservation et les destinataires des données sont à
            renseigner ici en fonction de la configuration retenue dans Google Tag Manager.{" "}
            <span className={p.todo}>À compléter</span>
          </p>
          <p>
            <strong>Recueil du consentement</strong> : aucun mécanisme de recueil du
            consentement n&apos;est actuellement installé sur ce site. Tant qu&apos;il ne
            l&apos;est pas, le conteneur se charge dès l&apos;ouverture de la page. Si les
            balises qu&apos;il contient déposent des cookies de mesure d&apos;audience ou de
            publicité, un bandeau de consentement conforme aux exigences de la CNIL doit
            être mis en place avant l&apos;ouverture du site au public.{" "}
            <span className={p.todo}>À compléter</span>
          </p>
        </div>
      </PageNarrow>
    </>
  );
}
