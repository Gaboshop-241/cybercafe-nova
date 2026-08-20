/**
 * SMART CYBER PK11 — identité orange et ivoire, déclinée dans un mode sombre charbon.
 * Le design met en avant les photos du vrai lieu : façade, postes réels et vie quotidienne.
 */
import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronUp,
  Clock3,
  FileText,
  GraduationCap,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Moon,
  Printer,
  ScanLine,
  Sun,
  UsersRound,
  Wifi,
  X,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTheme } from "@/contexts/ThemeContext";
const menuItems = [
  ["Services", "services"],
  ["Le cyber", "cyber"],
  ["Nos pass", "pass"],
] as const;

const whatsappNumber = "24105751036";
const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

function SmartImage({ className = "", onLoad, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (imageRef.current?.complete) setIsLoaded(true);
  }, []);

  return <img ref={imageRef} {...props} className={`smart-image ${isLoaded ? "is-loaded" : ""} ${className}`} onLoad={(event) => { setIsLoaded(true); onLoad?.(event); }} />;
}

function scrollToSection(id: string) {
  if (id === "accueil") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#101b21" : "#fffaf4");
  }, [theme]);

  useEffect(() => {
    const updateBackToTopVisibility = () => setShowBackToTop(window.scrollY > 460);
    updateBackToTopVisibility();
    window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateBackToTopVisibility);
  }, []);

  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);

  const returnToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

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
          <a className="smart-visit-button" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite préparer ma venue.")} target="_blank" rel="noreferrer">Préparer ma venue <ArrowUpRight size={16} /></a>
          <button className="smart-theme-toggle" onClick={() => toggleTheme?.()} aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"} aria-pressed={theme === "dark"} title={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}>
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
            <span>{theme === "light" ? "Sombre" : "Clair"}</span>
          </button>
          <button className="smart-menu-button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-controls="smart-mobile-navigation" aria-expanded={menuOpen} onClick={toggleMenu}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="smart-mobile-nav" id="smart-mobile-navigation" aria-label="Navigation mobile">
            {menuItems.map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}<ArrowUpRight size={17} /></button>)}
            <a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite préparer ma venue.")} target="_blank" rel="noreferrer">Préparer ma venue<ArrowUpRight size={17} /></a>
          </nav>
        )}
      </header>

      <main id="accueil">
        <section className="smart-hero" aria-labelledby="smart-title">
          <SmartImage className="smart-hero__image" src="/media/smart-cyber-facade-1440_7c85e1db.webp" srcSet="/media/smart-cyber-facade-720_a4ef08b5.webp 720w, /media/smart-cyber-facade-1440_7c85e1db.webp 1440w" sizes="100vw" width={1440} height={1080} fetchPriority="high" decoding="async" alt="Entrée de SMART CYBER PK11" />
          <div className="smart-hero__overlay" aria-hidden="true" />
          <div className="smart-hero__orbit" aria-hidden="true"><span>SC</span><i /></div>
          <div className="smart-hero__content">
            <p className="smart-kicker"><span /> CYBERCAFÉ DE PROXIMITÉ / PK11</p>
            <h1 id="smart-title">Vos démarches.<br /><em>Votre espace.</em></h1>
            <p className="smart-hero__lead">SMART CYBER PK11 vous accompagne dans vos démarches en ligne, vos impressions, vos numérisations et tous vos projets numériques.</p>
            <div className="smart-hero__buttons">
              <button className="smart-button smart-button--orange" onClick={() => navigate("pass")}>Découvrir les pass <ArrowDownRight size={19} /></button>
              <button className="smart-text-button" onClick={() => navigate("cyber")}>Découvrir le cybercafé <span>↘</span></button>
            </div>
          </div>
          <div className="smart-hero__brandplate"><span className="smart-hero__brandplate-mark">SC</span><div><strong>SMART CYBER PK11</strong><small>TERMINAL / PK11</small></div></div>
          <div className="smart-hero__card">
            <div className="smart-hero__card-top"><span className="smart-pulse" /> POSTES DISPONIBLES</div>
            <p>Connexion, impressions<br />et démarches en ligne.</p>
            <a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite réserver un poste et préparer ma venue.")} target="_blank" rel="noreferrer">Venir au cybercafé <ArrowUpRight size={16} /></a>
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
          <div className="smart-terminal-panel__identity"><span className="smart-terminal-panel__mark">SC</span><div><strong>SMART ROUTE</strong><small>PK11 / SERVICES DISPONIBLES</small></div></div>
          <div className="smart-terminal-panel__route"><span><b /> T01 / INTERNET</span><i>→</i><span><b /> T02 / IMPRESSION</span><i>→</i><span><b /> T03 / ASSISTANCE</span></div>
          <button onClick={() => navigate("pass")}>Voir les pass <ArrowUpRight size={16} /></button>
        </section>

        <section className="smart-services" id="services" aria-labelledby="services-title">
          <div className="smart-section-heading">
            <div>
              <p className="smart-kicker smart-kicker--dark"><span /> ROUTE T01 / SERVICES</p>
              <h2 id="services-title">Le bon service,<br /><em>au bon moment.</em></h2>
            </div>
            <p className="smart-section-heading__text">Un espace pratique, bien équipé et accueillant pour naviguer sur Internet, imprimer vos documents ou obtenir de l’aide.</p>
          </div>
          <div className="smart-service-grid">
            <article className="smart-service-card smart-service-card--ink"><div className="smart-service-card__line">TERMINAL 01 / EN LIGNE</div><Wifi /><h3>Connexion<br />Internet</h3><p>Un poste prêt pour vos recherches, vos formulaires et vos démarches numériques.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite utiliser un ordinateur avec Wi-Fi et climatiseur.")} target="_blank" rel="noreferrer" aria-label="Réserver un poste informatique"><ArrowUpRight size={19} /></a></article>
            <article className="smart-service-card smart-service-card--sand"><div className="smart-service-card__line">TERMINAL 02 / DOCUMENTS</div><Printer /><h3>Impression<br />et copies</h3><p>Préparez vos fichiers, imprimez-les et repartez avec vos documents.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite imprimer ou faire des copies.")} target="_blank" rel="noreferrer" aria-label="Demander une impression"><ArrowUpRight size={19} /></a></article>
            <article className="smart-service-card smart-service-card--clay"><div className="smart-service-card__line">TERMINAL 03 / ASSISTANCE</div><ScanLine /><h3>Numérisation<br />et assistance</h3><p>Bénéficiez d’une aide pratique pour vos documents et vos démarches.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite une assistance pour mes documents ou mes démarches.")} target="_blank" rel="noreferrer" aria-label="Demander une assistance"><ArrowUpRight size={19} /></a></article>
          </div>
        </section>

        <section className="smart-space" id="cyber" aria-labelledby="space-title">
          <div className="smart-space__interior">
            <SmartImage src="/media/smart-cyber-interieur-1200_a7dec806.webp" srcSet="/media/smart-cyber-interieur-640_4f8a8330.webp 640w, /media/smart-cyber-interieur-1200_a7dec806.webp 1200w" sizes="(max-width: 900px) 100vw, 52vw" width={1200} height={900} loading="lazy" decoding="async" alt="Les postes de travail équipés de SMART CYBER PK11" />
            <div className="smart-image-label">LIEU RÉEL / ESPACE DE TRAVAIL</div>
            <p><span>SMART</span> Un poste confortable,<br />pour chaque besoin.</p>
          </div>
          <div className="smart-space__copy">
            <p className="smart-kicker"><span /> ROUTE T02 / LE CYBER</p>
            <h2 id="space-title">Simple. Utile.<br /><em>Prêt pour vous.</em></h2>
            <p>Nos postes vous offrent l’essentiel pour avancer sereinement. Installez-vous, connectez-vous et profitez d’un accompagnement de proximité.</p>
            <div className="smart-check-list">
              <span><Check size={17} /> Des ordinateurs disponibles sur place</span>
              <span><Check size={17} /> Une salle lumineuse et pratique</span>
              <span><Check size={17} /> Une équipe à l’écoute de vos besoins</span>
            </div>
            <a className="smart-button smart-button--outline" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite préparer ma venue.")} target="_blank" rel="noreferrer">Préparer ma venue <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="smart-trust" aria-labelledby="trust-title">
          <div className="smart-trust__heading"><div className="smart-trust__beacon" aria-hidden="true"><span>SC</span><i /><small>SMART / ROUTE T02B</small></div><p className="smart-kicker smart-kicker--dark"><span /> ROUTE T02B / NOS ENGAGEMENTS</p><h2 id="trust-title">Des services clairs,<br /><em>sur lesquels compter.</em></h2><p>Avant votre venue, retrouvez l’essentiel : disponibilités, tarifs, équipements et accompagnement.</p></div>
          <div className="smart-trust__grid">
            <article><BadgeCheck /><span>01 / TRANSPARENCE</span><h3>Tarifs affichés</h3><p>Impression noir &amp; blanc à 100 FCFA, couleur à 500 FCFA et scan à 100 FCFA par page.</p></article>
            <article><Monitor /><span>02 / ÉQUIPEMENT</span><h3>Postes pratiques</h3><p>Ordinateurs avec Wi‑Fi et climatiseur, facturés à 1 000 FCFA l’heure.</p></article>
            <article><GraduationCap /><span>03 / ACCOMPAGNEMENT</span><h3>Une aide sur mesure</h3><p>Création de documents à partir de 5 000 FCFA et formations à la suite Office à 15 000 FCFA.</p></article>
            <article><MapPin /><span>04 / PROXIMITÉ</span><h3>Facile à trouver</h3><p>Au Gabon, au Carrefour du PK11 Marché. Le cybercafé est ouvert lundi, mardi, mercredi et vendredi.</p></article>
          </div>
          <a className="smart-trust__action" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite avoir des informations avant de venir.")} target="_blank" rel="noreferrer">Obtenir une information <ArrowUpRight size={17} /></a>
        </section>

        <section className="smart-reviews" aria-labelledby="reviews-title">
          <div className="smart-reviews__copy"><p className="smart-kicker smart-kicker--dark"><span /> ROUTE T02C / VOTRE EXPÉRIENCE</p><h2 id="reviews-title">Votre avis,<br /><em>notre meilleure amélioration.</em></h2><p>SMART CYBER PK11 publie uniquement les retours authentiques reçus avec l’accord de leurs auteurs. Votre expérience aide les prochains clients à choisir le service adapté à leurs besoins.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite laisser un avis sur mon expérience.\n\nPrénom ou initiales :\nService utilisé :\nNote sur 5 : __ / 5\nCommentaire détaillé :\n\nAutorisez-vous la publication de cet avis sur le site ? Oui / Non")} target="_blank" rel="noreferrer">Laisser un avis <MessageCircle size={18} /></a></div>
          <aside className="smart-reviews__promise"><span>AVIS AUTHENTIQUES UNIQUEMENT</span><strong>Les témoignages de clients vérifiés seront publiés ici.</strong><p>Envoyez-nous votre retour sur WhatsApp ; nous vous demanderons votre accord avant toute publication sur le site.</p><div><i /> Publication avec votre accord</div></aside>
        </section>

        <section className="smart-life" aria-labelledby="life-title">
          <div className="smart-life__heading"><p className="smart-kicker smart-kicker--dark"><span /> ROUTE T03 / LA VIE AU CYBER</p><h2 id="life-title">Ici, les projets<br /><em>prennent vie.</em></h2></div>
          <div className="smart-life__image smart-life__image--study"><SmartImage src="/media/smart-cyber-etudes-1000_d2767b4e.webp" srcSet="/media/smart-cyber-etudes-640_ec5b113f.webp 640w, /media/smart-cyber-etudes-1000_d2767b4e.webp 1000w" sizes="(max-width: 680px) 100vw, 34vw" width={1000} height={750} loading="lazy" decoding="async" alt="Clients adultes utilisant les ordinateurs de SMART CYBER PK11" /><div><span>01 / ÉTUDIER</span><strong>Apprendre, chercher,<br />préparer l’avenir.</strong></div></div>
          <div className="smart-life__image smart-life__image--help"><SmartImage src="/media/smart-cyber-services-1000_ee867ce6.webp" srcSet="/media/smart-cyber-services-640_34adb619.webp 640w, /media/smart-cyber-services-1000_ee867ce6.webp 1000w" sizes="(max-width: 680px) 100vw, 34vw" width={1000} height={750} loading="lazy" decoding="async" alt="Accompagnement d’un client au sein de SMART CYBER PK11" /><div><span>02 / AVANCER</span><strong>Un conseil utile,<br />au bon moment.</strong></div></div>
        </section>

        <section className="smart-gallery" aria-labelledby="gallery-title">
          <div className="smart-gallery__heading"><p className="smart-kicker smart-kicker--dark"><span /> ROUTE T04 / GALERIE DU CYBER</p><h2 id="gallery-title">Un lieu réel,<br /><em>prêt à vous accueillir.</em></h2><p>Découvrez SMART CYBER PK11, ses postes équipés et l’accompagnement proposé au quotidien.</p></div>
          <div className="smart-gallery__grid">
            <figure className="smart-gallery__item smart-gallery__item--facade"><SmartImage src="/media/smart-cyber-facade-1440_7c85e1db.webp" srcSet="/media/smart-cyber-facade-720_a4ef08b5.webp 720w, /media/smart-cyber-facade-1440_7c85e1db.webp 1440w" sizes="(max-width: 680px) 100vw, 36vw" width={1440} height={1080} loading="lazy" decoding="async" alt="Façade de SMART CYBER PK11 au Carrefour du PK11 Marché" /><figcaption>CARREFOUR DU PK11 MARCHÉ</figcaption></figure>
            <figure className="smart-gallery__item"><SmartImage src="/media/smart-cyber-interieur-1200_a7dec806.webp" srcSet="/media/smart-cyber-interieur-640_4f8a8330.webp 640w, /media/smart-cyber-interieur-1200_a7dec806.webp 1200w" sizes="(max-width: 680px) 50vw, 28vw" width={1200} height={900} loading="lazy" decoding="async" alt="Postes informatiques avec Wi-Fi et climatiseur chez SMART CYBER PK11" /><figcaption>POSTES ÉQUIPÉS</figcaption></figure>
            <figure className="smart-gallery__item"><SmartImage src="/media/smart-cyber-etudes-1000_d2767b4e.webp" srcSet="/media/smart-cyber-etudes-640_ec5b113f.webp 640w, /media/smart-cyber-etudes-1000_d2767b4e.webp 1000w" sizes="(max-width: 680px) 50vw, 28vw" width={1000} height={750} loading="lazy" decoding="async" alt="Clients étudiant et travaillant sur les ordinateurs du cybercafé" /><figcaption>ÉTUDIER &amp; TRAVAILLER</figcaption></figure>
            <figure className="smart-gallery__item"><SmartImage src="/media/smart-cyber-services-1000_ee867ce6.webp" srcSet="/media/smart-cyber-services-640_34adb619.webp 640w, /media/smart-cyber-services-1000_ee867ce6.webp 1000w" sizes="(max-width: 680px) 50vw, 28vw" width={1000} height={750} loading="lazy" decoding="async" alt="Assistance proposée à un client à SMART CYBER PK11" /><figcaption>ACCOMPAGNEMENT SUR PLACE</figcaption></figure>
          </div>
        </section>

        <section className="smart-pass" id="pass" aria-labelledby="pass-title">
          <div className="smart-pass__headline"><p className="smart-kicker smart-kicker--dark"><span /> ROUTE T05 / TARIFS &amp; PASS</p><h2 id="pass-title">Des prix clairs,<br /><em>un service utile.</em></h2></div>
          <div className="smart-pass__intro"><p>Réservez votre service par WhatsApp ou rendez-vous directement au cybercafé. Tous les tarifs sont exprimés en francs CFA.</p><div><Clock3 size={19} /> Sans rendez-vous</div></div>
          <div className="smart-pass__list">
            <article><span>01</span><div><Wifi /><h3>Ordinateur, Wi-Fi et climatisation</h3><p>Utilisez un ordinateur connecté à Internet, avec Wi-Fi et climatisation.</p></div><strong className="smart-price">1 000 FCFA <small>/ heure</small></strong><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite réserver un ordinateur avec Wi-Fi et climatisation à 1 000 FCFA par heure.")} target="_blank" rel="noreferrer">Réserver <ArrowUpRight size={17} /></a></article>
            <article><span>02</span><div><Printer /><h3>Impression &amp; numérisation</h3><p>Noir &amp; blanc : 100 FCFA/page · Couleur : 500 FCFA/page · Scan : 100 FCFA/page.</p></div><strong className="smart-price">Dès 100 FCFA</strong><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite une impression ou un scan. Pouvez-vous me confirmer la disponibilité ?")} target="_blank" rel="noreferrer">Imprimer <ArrowUpRight size={17} /></a></article>
            <article><span>03</span><div><FileText /><h3>Documents et formations Office</h3><p>Création de documents à partir de 5 000 FCFA · Formation à la suite Office : 15 000 FCFA.</p></div><strong className="smart-price">Dès 5 000 FCFA</strong><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite créer un document ou suivre une formation à la suite Office.")} target="_blank" rel="noreferrer">Être accompagné <ArrowUpRight size={17} /></a></article>
          </div>
          <div className="smart-extra-services"><span>EN PLUS, SUR DEMANDE</span><p>Téléchargement de films, de musique et de jeux vidéo · Assistance pour les démarches en ligne · Mise en page de documents et accompagnement numérique.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite connaître les services numériques disponibles.")} target="_blank" rel="noreferrer">Demander un service <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="smart-faq" aria-labelledby="faq-title">
          <div className="smart-faq__intro"><p className="smart-kicker"><span /> ROUTE T05B / QUESTIONS UTILES</p><h2 id="faq-title">Les réponses<br /><em>à vos questions.</em></h2><p>Consultez les informations essentielles sur les tarifs, les horaires et les services. Une question précise ? Écrivez-nous directement sur WhatsApp.</p><a href={whatsappLink("Bonjour SMART CYBER PK11, j’ai une question sur vos services.")} target="_blank" rel="noreferrer">Poser une question <MessageCircle size={17} /></a></div>
          <Accordion type="single" collapsible className="smart-faq__accordion">
            <AccordionItem value="hours"><AccordionTrigger>Quels sont vos jours et horaires d’ouverture ?</AccordionTrigger><AccordionContent>SMART CYBER PK11 est ouvert lundi, mardi, mercredi et vendredi, de 8 h à 20 h. Le cybercafé est fermé le jeudi, le samedi et le dimanche.</AccordionContent></AccordionItem>
            <AccordionItem value="computer"><AccordionTrigger>Combien coûte l’utilisation d’un ordinateur ?</AccordionTrigger><AccordionContent>Un poste informatique avec Wi‑Fi et climatiseur coûte 1 000 FCFA par heure.</AccordionContent></AccordionItem>
            <AccordionItem value="print"><AccordionTrigger>Quels sont les tarifs d’impression et de scan ?</AccordionTrigger><AccordionContent>L’impression noir et blanc coûte 100 FCFA par page, l’impression couleur 500 FCFA par page et le scan 100 FCFA par page.</AccordionContent></AccordionItem>
            <AccordionItem value="documents"><AccordionTrigger>Proposez-vous des documents et des formations ?</AccordionTrigger><AccordionContent>Oui. La création de documents débute à 5 000 FCFA. La formation à la suite Office est proposée à 15 000 FCFA.</AccordionContent></AccordionItem>
            <AccordionItem value="booking"><AccordionTrigger>Dois-je prendre rendez-vous ?</AccordionTrigger><AccordionContent>Non, vous pouvez venir directement au Carrefour du PK11 Marché. Pour vérifier la disponibilité d’un service, contactez-nous d’abord sur WhatsApp.</AccordionContent></AccordionItem>
            <AccordionItem value="other"><AccordionTrigger>Quels autres services sont disponibles ?</AccordionTrigger><AccordionContent>Nous proposons aussi le téléchargement de films, de musique et de jeux vidéo, l’aide aux démarches en ligne et la mise en page de documents.</AccordionContent></AccordionItem>
          </Accordion>
        </section>

        <section className="smart-cta" aria-labelledby="cta-title">
          <div><p className="smart-kicker"><span /> ROUTE T06 / PRÊT MAINTENANT</p><h2 id="cta-title">Un besoin en ligne ?<br /><em>Votre poste vous attend.</em></h2><p>Pour une recherche, un document ou une démarche, rendez-vous directement au Carrefour du PK11 Marché.</p><a className="smart-button smart-button--orange" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite obtenir des informations sur vos services.")} target="_blank" rel="noreferrer">Écrire sur WhatsApp <MessageCircle size={19} /></a></div>
          <div className="smart-cta__details"><span>ADRESSE</span><strong>Carrefour du PK11 Marché, Gabon</strong><span>HORAIRES</span><strong>Lun · Mar · Mer · Ven : 8 h–20 h</strong><span>FERMÉ</span><strong>Jeu · Sam · Dim</strong><span>WHATSAPP</span><strong>+241 05 75 10 36</strong></div>
        </section>
      </main>

      <button className={`smart-back-to-top ${showBackToTop ? "is-visible" : ""}`} onClick={returnToTop} aria-label="Retourner en haut de la page" aria-hidden={!showBackToTop} tabIndex={showBackToTop ? 0 : -1}><ChevronUp size={18} /><span>Haut</span></button>
      <a className="smart-whatsapp" href={whatsappLink("Bonjour SMART CYBER PK11, je souhaite avoir des informations sur vos services.")} target="_blank" rel="noreferrer" aria-label="Écrire à SMART CYBER PK11 sur WhatsApp"><MessageCircle size={23} /><span>WhatsApp</span></a>

      <footer className="smart-footer">
        <button className="smart-brand" onClick={() => navigate("accueil")}><span className="smart-brand__seal">SC</span><span className="smart-brand__copy"><strong>SMART CYBER</strong><small>PK11</small></span></button>
        <p>© 2026 SMART CYBER PK11 · Votre espace numérique de proximité.</p>
        <button onClick={() => navigate("accueil")}>RETOUR EN HAUT <ArrowUpRight size={15} /></button>
      </footer>
    </div>
  );
}
