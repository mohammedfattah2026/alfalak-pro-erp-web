import salesTouchAr from "../../assets/showcase/sales-touch-ar.png";
import salesTouchEn from "../../assets/showcase/sales-touch-en.png";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Play, CheckCircle2 } from "lucide-react";

function Hero() {
  const { t, i18n } = useTranslation();
  const benefits = t("hero.benefits", { returnObjects: true });

  return (
    <section id="home" className="hero-section">
      <div className="container hero-wide-container">
        <div className="row align-items-center g-4 hero-main-row">
          <div className="col-lg-5">
            <div className="hero-content">
              <div className="hero-badge"><span className="badge-dot" />{t("hero.badge")}</div>
              <h1>
                {t("hero.titleStart")}<span>{t("hero.titleAccent")}</span><br />{t("hero.titleEnd")}
              </h1>
              <p className="hero-description">{t("hero.description")}</p>
              <div className="hero-actions">
                <a href="https://alfalak.alfalaksoft2025.ddns.net:441/SUBSCRIPTION_PLAN_FEATURES" className="hero-primary-btn">
                  {t("hero.primaryAction")}<ArrowLeft className="directional-icon" size={19} />
                </a>
                <a href="/system" className="hero-secondary-btn"><Play size={18} />{t("hero.secondaryAction")}</a>
              </div>
              <div className="hero-benefits">
                {benefits.map((benefit) => <div key={benefit}><CheckCircle2 size={17} /><span>{benefit}</span></div>)}
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <a href="/system" className="hero-product-preview" aria-label={t("showcase.screenAlt")}>
              <img src={(i18n.resolvedLanguage || i18n.language || "ar").startsWith("ar") ? salesTouchAr : salesTouchEn} alt={t("showcase.screenAlt")} />
              <span>{t("showcase.screenTitle")}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-bottom-shape" />
    </section>
  );
}

export default Hero;
