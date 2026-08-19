/**
 * NOVA CYBER CAFÉ — « Station Nocturne »
 * Une hospitalité numérique bleu nuit, structurée comme une signalétique premium,
 * avec le Signal Vert comme repère pour l’action et la disponibilité.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Gamepad2,
  Menu,
  Monitor,
  MousePointer2,
  Printer,
  Sparkles,
  Wifi,
  X,
} from "lucide-react";
import { toast } from "sonner";

function goToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (sectionId: string) => {
    setMenuOpen(false);
    goToSection(sectionId);
  };

  const showContactHint = () => {
    toast("Réservation de poste", {
      description: "Passe au cybercafé pour choisir ton pass et t’installer.",
    });
  };

  return (
    <div className="nova-site">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Nova Cyber Café — accueil" onClick={() => navigate("top")}>
          <img src="/manus-storage/nova-symbol_f788e976.png" alt="Symbole Nova" className="brand__symbol" />
          <span className="brand__lockup"><span className="brand__name">NOVA<span>.</span></span><span className="brand__descriptor">CYBER CAFÉ</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <button onClick={() => navigate("services")}>Services</button>
          <button onClick={() => navigate("espace")}>L&apos;espace</button>
          <button onClick={() => navigate("formules")}>Formules</button>
        </nav>

        <div className="header-action">
          <button className="availability-pill" onClick={() => navigate("contact")}>
            <span className="live-dot" />
            Préparer mon passage
            <ArrowUpRight size={14} />
          </button>
          <button className="menu-toggle" aria-label="Ouvrir le menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navigation mobile">
            <button onClick={() => navigate("services")}>Services <ChevronRight size={18} /></button>
            <button onClick={() => navigate("espace")}>L&apos;espace <ChevronRight size={18} /></button>
            <button onClick={() => navigate("formules")}>Formules <ChevronRight size={18} /></button>
            <button onClick={() => navigate("contact")}>Nous trouver <ArrowUpRight size={18} /></button>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__image" aria-hidden="true">
            <img src="/manus-storage/nova-cybercafe-hero_56d1d0db.jpg" alt="" />
          </div>
          <div className="hero__grain" aria-hidden="true" />
          <div className="hero__content">
            <div className="eyebrow eyebrow--light"><span /> LE CYBERCAFÉ, RÉINVENTÉ</div>
            <h1 id="hero-title">Connecte.<br /><em>Crée.</em> Avance.</h1>
            <p className="hero__lead">Un espace vivant pour travailler, imprimer, jouer et rester connecté — simplement, rapidement, confortablement.</p>
            <div className="hero__buttons">
              <button className="button button--signal" onClick={() => navigate("formules")}>Voir les pass <ArrowDownRight size={19} /></button>
              <button className="text-link text-link--light" onClick={() => navigate("espace")}>Découvrir l&apos;espace <span>↘</span></button>
            </div>
          </div>

          <aside className="hero-status" aria-label="Informations pratiques">
            <div className="hero-status__top">
              <span className="status-indicator"><span className="live-dot" /> À VOTRE SERVICE</span>
              <Wifi size={20} />
            </div>
            <p>Un poste, une connexion,<br />un projet qui avance.</p>
            <button onClick={() => navigate("contact")}>Préparer mon passage <ArrowUpRight size={18} /></button>
          </aside>

          <div className="hero__station-brand" aria-label="Nova Cyber Café, terminal 01">
            <img src="/manus-storage/nova-symbol_f788e976.png" alt="" />
            <div><strong>NOVA STATION</strong><span>CYBER CAFÉ / T-01</span></div>
          </div>

          <div className="hero__side-label">NOVA / 01—26</div>
        </section>

        <section className="intro-strip" aria-label="Promesse Nova">
          <p>Pas seulement un accès Internet.</p>
          <p>Un <strong>point de départ</strong> pour vos idées.</p>
          <div className="intro-strip__orb"><Sparkles size={20} /></div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="station-rail" aria-hidden="true"><span>NOVA / TERMINAL 01</span><i /><span>RÉSEAU DISPONIBLE</span><i /><span>CONNECTER — CRÉER — AVANCER</span></div>
          <div className="section-header section-header--split">
            <div>
              <div className="eyebrow"><span /> 01 / NOS SERVICES</div>
              <h2 id="services-title">Tout ce qu&apos;il faut<br />pour <em>rester en mouvement.</em></h2>
            </div>
            <p>Que ce soit pour un dossier urgent, une session de jeu ou une impression de dernière minute, Nova rend votre temps en ligne plus fluide.</p>
          </div>

          <div className="services-grid">
            <article className="service-card service-card--primary">
              <div className="service-card__number">01</div>
              <div className="service-card__terminal">TERMINAL / CONNECT</div>
              <div className="service-card__icon"><Monitor /></div>
              <div>
                <h3>Connexion &amp;<br />bureautique</h3>
                <p>Des postes confortables pour naviguer, étudier, créer ou gérer vos projets.</p>
              </div>
              <button onClick={() => navigate("formules")} aria-label="Voir les formules connexion"><ArrowUpRight /></button>
            </article>

            <article className="service-card service-card--lime">
              <div className="service-card__number">02</div>
              <div className="service-card__terminal">TERMINAL / PLAY</div>
              <div className="service-card__icon"><Gamepad2 /></div>
              <div>
                <h3>Gaming<br />station</h3>
                <p>Votre pause mérite un vrai niveau de jeu.</p>
              </div>
              <div className="card-arrow"><ArrowUpRight /></div>
            </article>

            <article className="service-card service-card--dark">
              <div className="service-card__number">03</div>
              <div className="service-card__terminal">TERMINAL / PRINT</div>
              <div className="service-card__icon"><Printer /></div>
              <div>
                <h3>Impression<br />&amp; numérisation</h3>
                <p>Préparez, imprimez et repartez sans perdre de temps.</p>
              </div>
              <div className="card-arrow"><ArrowUpRight /></div>
            </article>
          </div>
        </section>

        <section className="space-section" id="espace" aria-labelledby="space-title">
          <div className="space-section__visual visual-card visual-card--gaming">
            <img src="/manus-storage/nova-gaming-zone_8b6f2cc9.jpg" alt="Joueurs installés à la station gaming de Nova Cyber Café" />
            <div className="visual-card__tag">ZONE / PLAY</div>
            <div className="visual-card__caption"><span>01</span> Le plaisir de jouer,<br />sans compromis.</div>
          </div>

          <div className="space-section__copy">
            <div className="eyebrow eyebrow--light"><span /> 02 / L&apos;ESPACE</div>
            <h2 id="space-title">Votre rythme.<br /><em>Votre place.</em></h2>
            <p>Nova est pensé pour les journées chargées comme pour les soirées entre amis. Installez-vous, branchez-vous, faites ce que vous avez à faire.</p>
            <div className="space-benefits">
              <div><Check size={18} /> Des postes soignés et confortables</div>
              <div><Check size={18} /> Une ambiance calme et stimulante</div>
              <div><Check size={18} /> De l&apos;aide quand vous en avez besoin</div>
            </div>
            <button className="button button--outline" onClick={showContactHint}>Réserver un poste <ArrowUpRight size={18} /></button>
          </div>

          <div className="space-section__productivity visual-card visual-card--productivity">
            <img src="/manus-storage/nova-productivity-zone_137d560e.jpg" alt="Poste de travail et impression au sein de Nova Cyber Café" />
            <div className="visual-card__tag">ZONE / WORK</div>
          </div>
        </section>

        <section className="pricing-section" id="formules" aria-labelledby="pricing-title">
          <div className="pricing-topline">
            <div className="eyebrow"><span /> 03 / FORMULES</div>
            <p>Choisissez le temps qui vous convient. Les tarifs exacts et promotions sont disponibles directement au café.</p>
          </div>
          <div className="pricing-heading">
            <h2 id="pricing-title">Du temps bien<br /><em>utilisé.</em></h2>
            <div className="pricing-heading__note"><Clock3 size={19} /> Simple, souple, à votre rythme.</div>
          </div>

          <div className="pricing-list" role="list">
            <article className="price-row" role="listitem">
              <div className="price-row__index">01</div>
              <div className="price-row__main"><Wifi /><div><span className="price-row__status"><i /> RÉSEAU DISPONIBLE</span><h3>Pass Connexion</h3><p>Navigation, études, recherche et démarches en ligne.</p></div></div>
              <div className="price-row__detail"><strong>FLEX</strong><span>À la carte</span></div>
              <button onClick={showContactHint}>Choisir <ArrowUpRight size={18} /></button>
            </article>
            <article className="price-row" role="listitem">
              <div className="price-row__index">02</div>
              <div className="price-row__main"><Gamepad2 /><div><span className="price-row__status"><i /> STATIONS PRÊTES</span><h3>Pass Gaming</h3><p>Une session dédiée sur nos stations de jeu.</p></div></div>
              <div className="price-row__detail"><strong>PLAY</strong><span>À la carte</span></div>
              <button onClick={showContactHint}>Choisir <ArrowUpRight size={18} /></button>
            </article>
            <article className="price-row" role="listitem">
              <div className="price-row__index">03</div>
              <div className="price-row__main"><FileText /><div><span className="price-row__status"><i /> SERVICE ACTIF</span><h3>Pass Print</h3><p>Impression, scan et préparation de vos documents.</p></div></div>
              <div className="price-row__detail"><strong>PRINT</strong><span>Sur place</span></div>
              <button onClick={showContactHint}>Choisir <ArrowUpRight size={18} /></button>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-section__beam" aria-hidden="true" />
          <div className="contact-section__content">
            <div className="eyebrow eyebrow--light"><span /> NOVA EST PRÊT</div>
            <h2 id="contact-title">Passe en<br /><em>mode productif.</em></h2>
            <p>Choisis ton pass, passe au cybercafé et installe-toi. Notre équipe t’oriente dès ton arrivée.</p>
            <button className="button button--signal" onClick={showContactHint}>Réserver un poste <ArrowUpRight size={19} /></button>
          </div>
          <div className="contact-section__details">
            <div><span>ARRIVÉE</span><strong>Passe directement au café</strong></div>
            <div><span>PASS</span><strong>Choisis-le au comptoir</strong></div>
            <div><span>ACCUEIL</span><strong>On t’oriente sur place</strong></div>
          </div>
          <MousePointer2 className="contact-section__pointer" size={40} />
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top" onClick={() => navigate("top")}>
          <img src="/manus-storage/nova-symbol_f788e976.png" alt="" className="brand__symbol" />
          <span className="brand__lockup"><span className="brand__name">NOVA<span>.</span></span><span className="brand__descriptor">CYBER CAFÉ</span></span>
        </a>
        <p>© 2026 Nova Cyber Café. Connecter les idées, simplement.</p>
        <button onClick={() => navigate("top")}>RETOUR EN HAUT <ArrowUpRight size={15} /></button>
      </footer>
    </div>
  );
}
