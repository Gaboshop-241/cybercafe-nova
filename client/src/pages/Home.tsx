/**
 * SMART CYBER PK11 — identité orange et blanc, chaleureuse et authentique.
 * Le design met en avant les photos du vrai lieu : façade, postes réels et vie quotidienne.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Clock3,
  FileText,
  GraduationCap,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Printer,
  ScanLine,
  UsersRound,
  Wifi,
  X,
} from "lucide-react";
const menuItems = [
  ["Services", "services"],
  ["Le cyber", "cyber"],
  ["Nos pass", "pass"],
] as const;

const whatsappNumber = "24105751036";
const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

function scrollToSection(id: string) {
  if (id === "accueil") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
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
          <a className="smart-visit-button" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite préparer ma visite.")} target="_blank" rel="noreferrer">Préparer ma visite <ArrowUpRight size={16} /></a>
          <button className="smart-menu-button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-controls="smart-mobile-navigation" aria-expanded={menuOpen} onClick={toggleMenu}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="smart-mobile-nav" id="smart-mobile-navigation" aria-label="Navigation mobile">
            {menuItems.map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}<ArrowUpRight size={17} /></button>)}
            <a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite préparer ma visite.")} target="_blank" rel="noreferrer">Préparer ma visite<ArrowUpRight size={17} /></a>
          </nav>
        )}
      </header>

      <main id="accueil">
        <section className="smart-hero" aria-labelledby="smart-title">
          <img className="smart-hero__image" src="/manus-storage/smart-cyber-pk11-facade-amelioree_a2a6a1df.png" alt="Entrée de SMART CYBER PK11" />
          <div className="smart-hero__overlay" aria-hidden="true" />
          <div className="smart-hero__orbit" aria-hidden="true"><span>SC</span><i /></div>
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
            <a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite réserver un poste et préparer ma visite.")} target="_blank" rel="noreferrer">Passer au cyber <ArrowUpRight size={16} /></a>
          </div>
          <div className="smart-hero__vertical">SMART CYBER / PK11</div>
        </section>

        <section className="smart-ribbon" aria-label="Services disponibles">
          <span><b /> POSTES DISPONIBLES</span><i />
          <span>TERMINAL 01 / INTERNET</span><i />
          <span>TERMINAL 02 / IMPRESSION</span><i />
          <span>SMART CYBER PK11</span>
        </section>

        <section className="smart-terminal-panel" aria-label="Parcours des services SMART CYBER PK11">
          <div className="smart-terminal-panel__identity"><span className="smart-terminal-panel__mark">SC</span><div><strong>SMART ROUTE</strong><small>PK11 / SERVICE LIVE</small></div></div>
          <div className="smart-terminal-panel__route"><span><b /> T01 / INTERNET</span><i>→</i><span><b /> T02 / IMPRESSION</span><i>→</i><span><b /> T03 / ASSISTANCE</span></div>
          <button onClick={() => navigate("pass")}>Voir les pass <ArrowUpRight size={16} /></button>
        </section>

        <section className="smart-services" id="services" aria-labelledby="services-title">
          <div className="smart-section-heading">
            <div>
              <p className="smart-kicker smart-kicker--dark"><span /> ROUTE T01 / SERVICES</p>
              <h2 id="services-title">Le bon service,<br /><em>au bon moment.</em></h2>
            </div>
            <p className="smart-section-heading__text">Un espace simple, équipé et accueillant pour travailler sur Internet, imprimer vos documents ou demander de l’aide.</p>
          </div>
          <div className="smart-service-grid">
            <article className="smart-service-card smart-service-card--ink"><div className="smart-service-card__line">TERMINAL 01 / EN LIGNE</div><Wifi /><h3>Connexion<br />Internet</h3><p>Un poste prêt pour vos recherches, formulaires et démarches numériques.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite utiliser un ordinateur avec Wi-Fi et climatiseur.")} target="_blank" rel="noreferrer" aria-label="Réserver un poste informatique"><ArrowUpRight size={19} /></a></article>
            <article className="smart-service-card smart-service-card--sand"><div className="smart-service-card__line">TERMINAL 02 / DOCUMENTS</div><Printer /><h3>Impression<br />&amp; copies</h3><p>Préparez vos fichiers, imprimez et repartez avec vos documents.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite imprimer ou faire des copies.")} target="_blank" rel="noreferrer" aria-label="Demander une impression"><ArrowUpRight size={19} /></a></article>
            <article className="smart-service-card smart-service-card--clay"><div className="smart-service-card__line">TERMINAL 03 / ASSISTANCE</div><ScanLine /><h3>Scan &amp;<br />accompagnement</h3><p>Une aide pratique lorsque vous avez besoin d’un coup de main.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite une assistance pour mes documents ou mes démarches.")} target="_blank" rel="noreferrer" aria-label="Demander une assistance"><ArrowUpRight size={19} /></a></article>
          </div>
        </section>

        <section className="smart-space" id="cyber" aria-labelledby="space-title">
          <div className="smart-space__interior">
            <img src="/manus-storage/smart-cyber-pk11-interieur-ameliore_cdba95ab.png" alt="Les postes de travail équipés de SMART CYBER PK11" />
            <div className="smart-image-label">LIEU RÉEL / ESPACE DE TRAVAIL</div>
            <p><span>SMART</span> Un poste confortable,<br />pour chaque projet.</p>
          </div>
          <div className="smart-space__copy">
            <p className="smart-kicker"><span /> ROUTE T02 / LE CYBER</p>
            <h2 id="space-title">Simple. Utile.<br /><em>Prêt pour vous.</em></h2>
            <p>Nos postes vous donnent l’essentiel pour avancer sereinement. Installez-vous, connectez-vous et profitez d’un accompagnement de proximité.</p>
            <div className="smart-check-list">
              <span><Check size={17} /> Des ordinateurs disponibles sur place</span>
              <span><Check size={17} /> Une salle lumineuse et pratique</span>
              <span><Check size={17} /> Une équipe à l’écoute de vos besoins</span>
            </div>
            <a className="smart-button smart-button--outline" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite préparer ma visite.")} target="_blank" rel="noreferrer">Préparer ma visite <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="smart-trust" aria-labelledby="trust-title">
          <div className="smart-trust__heading"><div className="smart-trust__beacon" aria-hidden="true"><span>SC</span><i /><small>SMART / ROUTE T02B</small></div><p className="smart-kicker smart-kicker--dark"><span /> ROUTE T02B / NOS ENGAGEMENTS</p><h2 id="trust-title">Des services clairs,<br /><em>sur lesquels compter.</em></h2><p>SMART CYBER PK11 met en avant les informations utiles avant votre arrivée : disponibilité, prix, équipements et accompagnement.</p></div>
          <div className="smart-trust__grid">
            <article><BadgeCheck /><span>01 / TRANSPARENCE</span><h3>Tarifs affichés</h3><p>Impression noir &amp; blanc à 100 FCFA, couleur à 500 FCFA et scan à 100 FCFA par page.</p></article>
            <article><Monitor /><span>02 / ÉQUIPEMENT</span><h3>Postes pratiques</h3><p>Ordinateurs avec Wi‑Fi et climatiseur, facturés à 1 000 FCFA l’heure.</p></article>
            <article><GraduationCap /><span>03 / ACCOMPAGNEMENT</span><h3>On vous aide</h3><p>Documents à partir de 5 000 FCFA et formations Suite Office à 15 000 FCFA.</p></article>
            <article><MapPin /><span>04 / PROXIMITÉ</span><h3>Facile à trouver</h3><p>Au Gabon, au Carrefour du PK11 Marché. Accueil ouvert lundi, mardi, mercredi et vendredi.</p></article>
          </div>
          <a className="smart-trust__action" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite avoir des informations avant de venir.")} target="_blank" rel="noreferrer">Obtenir une information <ArrowUpRight size={17} /></a>
        </section>

        <section className="smart-life" aria-labelledby="life-title">
          <div className="smart-life__heading"><p className="smart-kicker smart-kicker--dark"><span /> ROUTE T03 / LA VIE AU CYBER</p><h2 id="life-title">Ici, les projets<br /><em>prennent vie.</em></h2></div>
          <div className="smart-life__image smart-life__image--study"><img src="/manus-storage/smart-cyber-pk11-vie-interieure-etudes_1ca88615.jpg" alt="Clients adultes utilisant les ordinateurs de SMART CYBER PK11" /><div><span>01 / ÉTUDIER</span><strong>Apprendre, chercher,<br />préparer l’avenir.</strong></div></div>
          <div className="smart-life__image smart-life__image--help"><img src="/manus-storage/smart-cyber-pk11-vie-interieure-services_055faf80.jpg" alt="Accompagnement d’un client au sein de SMART CYBER PK11" /><div><span>02 / AVANCER</span><strong>Un conseil utile,<br />au bon moment.</strong></div></div>
        </section>

        <section className="smart-gallery" aria-labelledby="gallery-title">
          <div className="smart-gallery__heading"><p className="smart-kicker smart-kicker--dark"><span /> ROUTE T04 / GALERIE DU CYBER</p><h2 id="gallery-title">Un lieu réel,<br /><em>prêt à vous accueillir.</em></h2><p>Découvrez SMART CYBER PK11, ses postes équipés et l’accompagnement proposé au quotidien.</p></div>
          <div className="smart-gallery__grid">
            <figure className="smart-gallery__item smart-gallery__item--facade"><img src="/manus-storage/smart-cyber-pk11-facade-amelioree_a2a6a1df.png" alt="Façade de SMART CYBER PK11 au Carrefour du PK11 Marché" /><figcaption>CARREFOUR DU PK11 MARCHÉ</figcaption></figure>
            <figure className="smart-gallery__item"><img src="/manus-storage/smart-cyber-pk11-interieur-ameliore_cdba95ab.png" alt="Postes informatiques avec Wi-Fi et climatiseur chez SMART CYBER PK11" /><figcaption>POSTES ÉQUIPÉS</figcaption></figure>
            <figure className="smart-gallery__item"><img src="/manus-storage/smart-cyber-pk11-vie-interieure-etudes_1ca88615.jpg" alt="Clients étudiant et travaillant sur les ordinateurs du cybercafé" /><figcaption>ÉTUDIER &amp; TRAVAILLER</figcaption></figure>
            <figure className="smart-gallery__item"><img src="/manus-storage/smart-cyber-pk11-vie-interieure-services_055faf80.jpg" alt="Assistance proposée à un client à SMART CYBER PK11" /><figcaption>ACCOMPAGNEMENT SUR PLACE</figcaption></figure>
          </div>
        </section>

        <section className="smart-pass" id="pass" aria-labelledby="pass-title">
          <div className="smart-pass__headline"><p className="smart-kicker smart-kicker--dark"><span /> ROUTE T05 / TARIFS &amp; PASS</p><h2 id="pass-title">Des prix clairs,<br /><em>un service utile.</em></h2></div>
          <div className="smart-pass__intro"><p>Réservez votre service par WhatsApp ou passez directement au cyber. Tous les tarifs sont indiqués en francs CFA.</p><div><Clock3 size={19} /> Sans rendez-vous</div></div>
          <div className="smart-pass__list">
            <article><span>01</span><div><Wifi /><h3>Ordinateur, Wi-Fi &amp; climatiseur</h3><p>Utilisation d’un ordinateur équipé, avec Internet et climatisation.</p></div><strong className="smart-price">1 000 FCFA <small>/ heure</small></strong><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite réserver un ordinateur avec Wi-Fi et climatiseur à 1 000 FCFA par heure.")} target="_blank" rel="noreferrer">Réserver <ArrowUpRight size={17} /></a></article>
            <article><span>02</span><div><Printer /><h3>Impression &amp; numérisation</h3><p>Noir &amp; blanc : 100 FCFA/page · Couleur : 500 FCFA/page · Scan : 100 FCFA/page.</p></div><strong className="smart-price">Dès 100 FCFA</strong><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite une impression ou un scan. Pouvez-vous me confirmer la disponibilité ?")} target="_blank" rel="noreferrer">Imprimer <ArrowUpRight size={17} /></a></article>
            <article><span>03</span><div><FileText /><h3>Documents &amp; formations Office</h3><p>Réalisation de documents à partir de 5 000 FCFA · Formation Suite Office : 15 000 FCFA.</p></div><strong className="smart-price">Dès 5 000 FCFA</strong><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite réaliser un document ou suivre une formation Suite Office.")} target="_blank" rel="noreferrer">Être aidé <ArrowUpRight size={17} /></a></article>
          </div>
          <div className="smart-extra-services"><span>EN PLUS SUR DEMANDE</span><p>Téléchargement de films, musiques et jeux vidéo · Assistance aux démarches en ligne · Mise en page de documents et accompagnement numérique.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite connaître les services numériques disponibles.")} target="_blank" rel="noreferrer">Demander un service <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="smart-cta" aria-labelledby="cta-title">
          <div><p className="smart-kicker"><span /> ROUTE T06 / PRÊT MAINTENANT</p><h2 id="cta-title">Un besoin en ligne ?<br /><em>Votre poste vous attend.</em></h2><p>Pour une recherche, un document ou une démarche, passez directement au Carrefour du PK11 Marché.</p><a className="smart-button smart-button--orange" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite avoir des informations sur vos services.")} target="_blank" rel="noreferrer">Écrire sur WhatsApp <MessageCircle size={19} /></a></div>
          <div className="smart-cta__details"><span>ADRESSE</span><strong>Carrefour du PK11 Marché, Gabon</strong><span>HORAIRES</span><strong>Lun · Mar · Mer · Ven : 8h–20h</strong><span>FERMÉ</span><strong>Jeu · Sam · Dim</strong><span>WHATSAPP</span><strong>+241 05 75 10 36</strong></div>
        </section>
      </main>

      <a className="smart-whatsapp" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite avoir des informations sur vos services.")} target="_blank" rel="noreferrer" aria-label="Écrire à SMART CYBER PK11 sur WhatsApp"><MessageCircle size={23} /><span>WhatsApp</span></a>

      <footer className="smart-footer">
        <button className="smart-brand" onClick={() => navigate("accueil")}><span className="smart-brand__seal">SC</span><span className="smart-brand__copy"><strong>SMART CYBER</strong><small>PK11</small></span></button>
        <p>© 2026 SMART CYBER PK11 · Votre espace numérique de proximité.</p>
        <button onClick={() => navigate("accueil")}>RETOUR EN HAUT <ArrowUpRight size={15} /></button>
      </footer>
    </div>
  );
}
