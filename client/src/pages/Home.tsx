/**
 * SMART CYBER PK11 — identité orange et blanc, chaleureuse et authentique.
 * Le design met en avant les photos du vrai lieu : façade, postes réels et vie quotidienne.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clock3,
  FileText,
  Menu,
  Monitor,
  Printer,
  ScanLine,
  UsersRound,
  Wifi,
  X,
} from "lucide-react";
import { toast } from "sonner";

const menuItems = [
  ["Services", "services"],
  ["Le cyber", "cyber"],
  ["Nos pass", "pass"],
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const inviteVisit = () => {
    toast("Bienvenue chez SMART CYBER PK11", {
      description: "Passez au cyber pour choisir votre poste et démarrer.",
    });
  };

  return (
    <div className="smart-site">
      <header className="smart-header">
        <button className="smart-brand" onClick={() => navigate("accueil")} aria-label="Retour à l’accueil SMART CYBER PK11">
          <span className="smart-brand__seal">SC</span>
          <span className="smart-brand__copy"><strong>SMART CYBER</strong><small>PK11</small></span>
        </button>

        <nav className="smart-desktop-nav" aria-label="Navigation principale">
          {menuItems.map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}
        </nav>

        <div className="smart-header__action">
          <button className="smart-visit-button" onClick={inviteVisit}>Nous visiter <ArrowUpRight size={16} /></button>
          <button className="smart-menu-button" aria-label="Ouvrir le menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="smart-mobile-nav" aria-label="Navigation mobile">
            {menuItems.map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}<ArrowUpRight size={17} /></button>)}
            <button onClick={inviteVisit}>Nous visiter<ArrowUpRight size={17} /></button>
          </nav>
        )}
      </header>

      <main id="accueil">
        <section className="smart-hero" aria-labelledby="smart-title">
          <img className="smart-hero__image" src="/manus-storage/smart-cyber-pk11-facade-amelioree_a2a6a1df.png" alt="Entrée de SMART CYBER PK11" />
          <div className="smart-hero__overlay" aria-hidden="true" />
          <div className="smart-hero__content">
            <p className="smart-kicker"><span /> CYBERCAFÉ DE PROXIMITÉ / PK11</p>
            <h1 id="smart-title">Vos démarches.<br /><em>Votre espace.</em></h1>
            <p className="smart-hero__lead">SMART CYBER PK11 vous accueille pour naviguer, imprimer, scanner et avancer sur vos projets en toute simplicité.</p>
            <div className="smart-hero__buttons">
              <button className="smart-button smart-button--orange" onClick={() => navigate("pass")}>Découvrir les pass <ArrowDownRight size={19} /></button>
              <button className="smart-text-button" onClick={() => navigate("cyber")}>Découvrir le cyber <span>↘</span></button>
            </div>
          </div>
          <div className="smart-hero__brandplate"><span className="smart-hero__brandplate-mark">SC</span><div><strong>SMART CYBER PK11</strong><small>TERMINAL / PK11</small></div></div>
          <div className="smart-hero__card">
            <div className="smart-hero__card-top"><span className="smart-pulse" /> POSTES DISPONIBLES</div>
            <p>Connexion, impression<br />et démarches prêtes.</p>
            <button onClick={inviteVisit}>Passer au cyber <ArrowUpRight size={16} /></button>
          </div>
          <div className="smart-hero__vertical">SMART CYBER / PK11</div>
        </section>

        <section className="smart-ribbon" aria-label="Services disponibles">
          <span><b /> POSTES DISPONIBLES</span><i />
          <span>TERMINAL 01 / INTERNET</span><i />
          <span>TERMINAL 02 / IMPRESSION</span><i />
          <span>SMART CYBER PK11</span>
        </section>

        <section className="smart-services" id="services" aria-labelledby="services-title">
          <div className="smart-section-heading">
            <div>
              <p className="smart-kicker smart-kicker--dark"><span /> 01 / SERVICES</p>
              <h2 id="services-title">Le bon service,<br /><em>au bon moment.</em></h2>
            </div>
            <p className="smart-section-heading__text">Un espace simple, équipé et accueillant pour travailler sur Internet, imprimer vos documents ou demander de l’aide.</p>
          </div>
          <div className="smart-service-grid">
            <article className="smart-service-card smart-service-card--ink"><div className="smart-service-card__line">TERMINAL 01 / EN LIGNE</div><Wifi /><h3>Connexion<br />Internet</h3><p>Un poste prêt pour vos recherches, formulaires et démarches numériques.</p><button onClick={() => navigate("pass")}><ArrowUpRight size={19} /></button></article>
            <article className="smart-service-card smart-service-card--sand"><div className="smart-service-card__line">TERMINAL 02 / DOCUMENTS</div><Printer /><h3>Impression<br />&amp; copies</h3><p>Préparez vos fichiers, imprimez et repartez avec vos documents.</p><button onClick={inviteVisit}><ArrowUpRight size={19} /></button></article>
            <article className="smart-service-card smart-service-card--clay"><div className="smart-service-card__line">TERMINAL 03 / ASSISTANCE</div><ScanLine /><h3>Scan &amp;<br />accompagnement</h3><p>Une aide pratique lorsque vous avez besoin d’un coup de main.</p><button onClick={inviteVisit}><ArrowUpRight size={19} /></button></article>
          </div>
        </section>

        <section className="smart-space" id="cyber" aria-labelledby="space-title">
          <div className="smart-space__interior">
            <img src="/manus-storage/smart-cyber-pk11-interieur-ameliore_cdba95ab.png" alt="Les postes de travail équipés de SMART CYBER PK11" />
            <div className="smart-image-label">LIEU RÉEL / ESPACE DE TRAVAIL</div>
            <p><span>SMART</span> Un poste confortable,<br />pour chaque projet.</p>
          </div>
          <div className="smart-space__copy">
            <p className="smart-kicker"><span /> 02 / LE CYBER</p>
            <h2 id="space-title">Simple. Utile.<br /><em>Prêt pour vous.</em></h2>
            <p>Nos postes vous donnent l’essentiel pour avancer sereinement. Installez-vous, connectez-vous et profitez d’un accompagnement de proximité.</p>
            <div className="smart-check-list">
              <span><Check size={17} /> Des ordinateurs disponibles sur place</span>
              <span><Check size={17} /> Une salle lumineuse et pratique</span>
              <span><Check size={17} /> Une équipe à l’écoute de vos besoins</span>
            </div>
            <button className="smart-button smart-button--outline" onClick={inviteVisit}>Préparer ma visite <ArrowUpRight size={18} /></button>
          </div>
        </section>

        <section className="smart-life" aria-labelledby="life-title">
          <div className="smart-life__heading"><p className="smart-kicker smart-kicker--dark"><span /> 03 / LA VIE AU CYBER</p><h2 id="life-title">Ici, les projets<br /><em>prennent vie.</em></h2></div>
          <div className="smart-life__image smart-life__image--study"><img src="/manus-storage/smart-cyber-pk11-vie-interieure-etudes_1ca88615.jpg" alt="Clients adultes utilisant les ordinateurs de SMART CYBER PK11" /><div><span>01 / ÉTUDIER</span><strong>Apprendre, chercher,<br />préparer l’avenir.</strong></div></div>
          <div className="smart-life__image smart-life__image--help"><img src="/manus-storage/smart-cyber-pk11-vie-interieure-services_055faf80.jpg" alt="Accompagnement d’un client au sein de SMART CYBER PK11" /><div><span>02 / AVANCER</span><strong>Un conseil utile,<br />au bon moment.</strong></div></div>
        </section>

        <section className="smart-pass" id="pass" aria-labelledby="pass-title">
          <div className="smart-pass__headline"><p className="smart-kicker smart-kicker--dark"><span /> 04 / NOS PASS</p><h2 id="pass-title">Passez à l&apos;action,<br /><em>simplement.</em></h2></div>
          <div className="smart-pass__intro"><p>Choisissez le service dont vous avez besoin et rendez-vous directement au cyber. L’équipe vous accueille sur place.</p><div><Clock3 size={19} /> Sans rendez-vous</div></div>
          <div className="smart-pass__list">
            <article><span>01</span><div><Wifi /><h3>Pass Connexion</h3><p>Internet, recherches et démarches en ligne.</p></div><button onClick={inviteVisit}>Choisir <ArrowUpRight size={17} /></button></article>
            <article><span>02</span><div><Printer /><h3>Pass Impression</h3><p>Impressions, copies et préparation de documents.</p></div><button onClick={inviteVisit}>Choisir <ArrowUpRight size={17} /></button></article>
            <article><span>03</span><div><UsersRound /><h3>Pass Assistance</h3><p>Une aide pratique pour vos démarches numériques.</p></div><button onClick={inviteVisit}>Choisir <ArrowUpRight size={17} /></button></article>
          </div>
        </section>

        <section className="smart-cta" aria-labelledby="cta-title">
          <div><p className="smart-kicker"><span /> SMART CYBER PK11 / PRÊT MAINTENANT</p><h2 id="cta-title">Un besoin en ligne ?<br /><em>Votre poste vous attend.</em></h2><p>Pour une recherche, un document ou une démarche, passez directement au PK11.</p><button className="smart-button smart-button--orange" onClick={inviteVisit}>Passer au cyber <ArrowUpRight size={19} /></button></div>
          <div className="smart-cta__details"><span>STATUT</span><strong><i /> Accueil sur place</strong><span>TERMINAUX</span><strong>Internet · Impression · Scan</strong><span>ESPRIT SMART</span><strong>Simple, rapide, humain</strong></div>
        </section>
      </main>

      <footer className="smart-footer">
        <button className="smart-brand" onClick={() => navigate("accueil")}><span className="smart-brand__seal">SC</span><span className="smart-brand__copy"><strong>SMART CYBER</strong><small>PK11</small></span></button>
        <p>© 2026 SMART CYBER PK11 · Votre espace numérique de proximité.</p>
        <button onClick={() => navigate("accueil")}>RETOUR EN HAUT <ArrowUpRight size={15} /></button>
      </footer>
    </div>
  );
}
