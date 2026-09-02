import { useTranslation } from "react-i18next";
import { CheckCircle2, MousePointerClick } from "lucide-react";
import salesTouchAr from "../../assets/showcase/sales-touch-ar.webp";
import salesTouchEn from "../../assets/showcase/sales-touch-en.webp";

function Showcase() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "ar";
  const screen = language.startsWith("en") ? salesTouchEn : salesTouchAr;
  const points = t("showcase.points", { returnObjects: true });

  return (
    <section id="showcase" className="showcase-section">
      <div className="container">
        <div className="showcase-intro">
          <div>
            <span className="section-label">{t("showcase.label")}</span>
            <h2>{t("showcase.titleStart")}<span>{t("showcase.titleAccent")}</span></h2>
          </div>
          <p>{t("showcase.description")}</p>
        </div>

        <div className="showcase-shell" data-aos="fade-up">
          <div className="showcase-toolbar">
            <div className="showcase-window-dots" aria-hidden="true"><span /><span /><span /></div>
            <div className="showcase-toolbar-title">
              <MousePointerClick size={18} />
              <span>{t("showcase.screenTitle")}</span>
            </div>
          </div>

          <div className="showcase-screen">
            <img
              key={language}
              src={screen}
              alt={t("showcase.screenAlt")}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="showcase-points">
          {points.map((point) => <div key={point}><CheckCircle2 size={18} /><span>{point}</span></div>)}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
