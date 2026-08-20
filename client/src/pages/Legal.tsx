/**
 * SMART CYBER PK11 — pages légales dans la continuité de la station numérique orange.
 * Les informations non communiquées par l’exploitant ne sont pas inventées.
 */
import { useEffect } from "react";
import { FileText, Moon, Scale, ShieldCheck, Sun } from "lucide-react";
import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

type LegalPageKind = "mentions" | "confidentialite" | "conditions";

type LegalSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

type LegalContent = {
  label: string;
  title: React.ReactNode;
  intro: string;
  icon: typeof FileText;
  sections: LegalSection[];
};

const legalContent: Record<LegalPageKind, LegalContent> = {
  mentions: {
    label: "ROUTE L01 / MENTIONS LÉGALES",
    title: <>Une présence<br /><em>claire et identifiable.</em></>,
    intro: "Ces mentions précisent les informations de référence de SMART CYBER PK11 et les conditions générales de publication du site.",
    icon: FileText,
    sections: [
      {
        title: "Éditeur du site",
        paragraphs: [
          "Le site est édité par SMART CYBER PK11, cybercafé de proximité situé au Carrefour du PK11 Marché, Gabon.",
          "Pour toute demande relative au site ou aux services présentés, contactez l’équipe via WhatsApp au +241 05 75 10 36.",
        ],
      },
      {
        title: "Responsabilité de publication",
        paragraphs: [
          "La responsabilité de publication est assurée par l’exploitant de SMART CYBER PK11. Les informations administratives complémentaires, lorsqu’elles sont requises, peuvent être obtenues directement auprès de l’établissement.",
        ],
      },
      {
        title: "Hébergement",
        paragraphs: [
          "Le site est hébergé par Vercel Inc. La plateforme technique est accessible à l’adresse vercel.com.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        paragraphs: [
          "Les textes, visuels, photographies du lieu, éléments graphiques et monogramme SC présents sur ce site sont protégés. Toute reproduction, adaptation ou diffusion, totale ou partielle, nécessite l’accord préalable de SMART CYBER PK11, sauf disposition légale contraire.",
        ],
      },
    ],
  },
  confidentialite: {
    label: "ROUTE L02 / CONFIDENTIALITÉ",
    title: <>Vos données,<br /><em>avec transparence.</em></>,
    intro: "Cette politique décrit les données susceptibles d’être traitées lors de la consultation du site et la manière de nous contacter à leur sujet.",
    icon: ShieldCheck,
    sections: [
      {
        title: "Données traitées sur le site",
        paragraphs: [
          "Le site ne propose pas de création de compte ni de formulaire de commande. Il ne demande donc pas directement votre nom, votre numéro ou votre adresse électronique lors de la simple navigation.",
          "Votre préférence d’affichage clair ou sombre est enregistrée localement sur votre appareil afin de conserver votre choix lors d’une prochaine visite.",
        ],
      },
      {
        title: "Contact par WhatsApp",
        paragraphs: [
          "Lorsque vous choisissez d’écrire à SMART CYBER PK11, vous êtes redirigé vers WhatsApp. Les informations que vous envoyez dans cet échange sont traitées pour répondre à votre demande, préparer un service ou recueillir votre avis avec votre accord.",
          "WhatsApp applique ses propres règles de confidentialité. Nous vous invitons à les consulter avant l’envoi d’informations sensibles.",
        ],
      },
      {
        title: "Mesure technique d’audience",
        paragraphs: [
          "Des données techniques de consultation peuvent être traitées par l’infrastructure d’hébergement ou l’outil de mesure d’audience configuré pour le site. Elles servent à comprendre l’utilisation générale du site et à maintenir son bon fonctionnement.",
        ],
      },
      {
        title: "Vos droits et contact",
        paragraphs: [
          "Vous pouvez demander des précisions, l’accès, la rectification ou la suppression des informations que vous avez communiquées à SMART CYBER PK11, dans la limite des obligations applicables. Pour exercer ce droit, écrivez-nous sur WhatsApp au +241 05 75 10 36.",
        ],
      },
    ],
  },
  conditions: {
    label: "ROUTE L03 / CONDITIONS D’UTILISATION",
    title: <>Un site utile,<br /><em>des règles simples.</em></>,
    intro: "Ces conditions encadrent l’accès au site vitrine et aux informations présentées par SMART CYBER PK11.",
    icon: Scale,
    sections: [
      {
        title: "Objet du site",
        paragraphs: [
          "Le site présente les services, horaires, tarifs indicatifs, coordonnées et informations pratiques de SMART CYBER PK11. Il permet également de préparer une demande via WhatsApp.",
        ],
      },
      {
        title: "Disponibilité et tarifs",
        paragraphs: [
          "Les informations publiées sont fournies à titre informatif. La disponibilité des postes, délais de réalisation et prestations peut varier selon l’affluence et les besoins exprimés.",
          "Les tarifs affichés sont ceux communiqués par l’établissement. Avant toute prestation, vous pouvez demander confirmation à l’équipe sur place ou sur WhatsApp.",
        ],
      },
      {
        title: "Usage autorisé",
        paragraphs: [
          "Vous vous engagez à utiliser le site de manière légale, respectueuse et compatible avec son bon fonctionnement. Il est notamment interdit de tenter de perturber le site, d’en extraire massivement le contenu ou d’utiliser la marque et les visuels sans autorisation.",
        ],
      },
      {
        title: "Liens et échanges externes",
        paragraphs: [
          "Les liens vers WhatsApp ouvrent un service tiers. SMART CYBER PK11 ne contrôle pas les conditions, la disponibilité ou les politiques de ce service externe.",
        ],
      },
      {
        title: "Droit applicable",
        paragraphs: [
          "Ces conditions sont interprétées au regard des règles applicables au Gabon. En cas de question ou de désaccord, contactez d’abord SMART CYBER PK11 afin de rechercher une solution directe.",
        ],
      },
    ],
  },
};

function LegalPage({ kind }: { kind: LegalPageKind }) {
  const content = legalContent[kind];
  const Icon = content.icon;
  const { theme, toggleTheme } = useTheme();
  const routeCode = content.label.split(" / ")[0].replace("ROUTE ", "");

  useEffect(() => {
    document.title = `${kind === "mentions" ? "Mentions légales" : kind === "confidentialite" ? "Confidentialité" : "Conditions d’utilisation"} | SMART CYBER PK11`;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [kind]);

  return (
    <div className="smart-legal">
      <header className="smart-legal__header">
        <Link href="/" className="smart-brand" aria-label="Retourner à l’accueil SMART CYBER PK11">
          <span className="smart-brand__seal">SC</span>
          <span className="smart-legal__brand-orbit" aria-hidden="true" />
          <span className="smart-brand__copy"><strong>SMART CYBER</strong><small>PK11 / LÉGAL</small></span>
        </Link>
        <nav className="smart-legal__header-nav" aria-label="Pages légales">
          <Link href="/mentions-legales">Mentions</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/conditions-utilisation">Conditions</Link>
        </nav>
        <button className="smart-theme-toggle" onClick={() => toggleTheme?.()} aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"} aria-pressed={theme === "dark"}>
          {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          <span>{theme === "light" ? "Sombre" : "Clair"}</span>
        </button>
      </header>

      <main className="smart-legal__main">
        <section className="smart-legal__hero" aria-labelledby="legal-title">
          <div>
            <p className="smart-kicker"><span /> {content.label}</p>
            <h1 id="legal-title">{content.title}</h1>
            <p>{content.intro}</p>
          </div>
          <div className="smart-legal__symbol" aria-hidden="true"><Icon size={38} /><span>SC</span></div>
        </section>

        <div className="smart-legal__layout">
          <aside className="smart-legal__aside">
            <span>SMART CYBER PK11</span>
            <strong>Informations<br />de référence</strong>
            <p>Dernière mise à jour : 20 août 2026.</p>
            <div className="smart-legal__route-status"><i /><small>{routeCode} / INFORMATION PUBLIQUE</small></div>
            <Link href="/">← Retour à l’accueil</Link>
          </aside>
          <div className="smart-legal__content">
            {content.sections.map((section, index) => (
              <article key={section.title}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                </div>
              </article>
            ))}
            <aside className="smart-legal__notice">
              <span>{routeCode} / FIN DE PARCOURS</span>
              <strong>Une précision sur cette page ?</strong>
              <p>Écrivez à SMART CYBER PK11 sur WhatsApp. L’équipe vous répondra pour vous orienter vers l’information ou le service utile.</p>
              <a href="https://wa.me/24105751036?text=Bonjour%20SMART%20CYBER%20PK11%2C%20j%E2%80%99ai%20une%20question%20sur%20vos%20informations%20l%C3%A9gales." target="_blank" rel="noreferrer">Écrire sur WhatsApp →</a>
            </aside>
          </div>
        </div>
      </main>

      <footer className="smart-legal__footer">
        <div className="smart-legal__footer-identity"><span className="smart-legal__footer-mark" aria-hidden="true">SC</span><p>© 2026 SMART CYBER PK11 · Carrefour du PK11 Marché, Gabon.</p></div>
        <nav aria-label="Liens légaux de pied de page">
          <span className="smart-legal__footer-route" aria-hidden="true">{routeCode} / OK</span>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/conditions-utilisation">Conditions</Link>
        </nav>
      </footer>
    </div>
  );
}

export function LegalNotices() {
  return <LegalPage kind="mentions" />;
}

export function PrivacyPolicy() {
  return <LegalPage kind="confidentialite" />;
}

export function TermsOfUse() {
  return <LegalPage kind="conditions" />;
}
