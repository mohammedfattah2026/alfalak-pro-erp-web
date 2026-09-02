import { useTranslation } from "react-i18next";
import { Building2, Cloud, CheckCircle2 } from "lucide-react";

function About() {
  const { t } = useTranslation();
  const points = t("about.points", { returnObjects: true });

  return (
    <section id="about" className="about-section">
      <div className="container"><div className="row align-items-center g-5">
        <div className="col-lg-6" data-aos="fade-left">
          <span className="section-label">{t("about.label")}</span>
          <h2 className="about-title">{t("about.titleStart")}<span>{t("about.titleAccent")}</span></h2>
          <p className="about-text">{t("about.paragraphOne")}</p>
          <p className="about-text">{t("about.paragraphTwoStart")} <strong>Alfalak Pro ERP</strong> {t("about.paragraphTwoEnd")}</p>
          <div className="about-points">{points.map((point) => <div key={point}><CheckCircle2 size={19} /><span>{point}</span></div>)}</div>
        </div>
        <div className="col-lg-6" data-aos="fade-right">
          <div className="about-visual">
            <div className="about-main-card"><div className="about-card-icon"><Building2 size={28} /></div><span>{t("about.company")}</span><h3>{t("about.cardTitle")}<br /><strong>{t("about.cardAccent")}</strong></h3><p>{t("about.cardText")}</p></div>
            <div className="about-erp-card"><div className="erp-icon"><Cloud size={22} /></div><div><small>{t("about.cloudProduct")}</small><strong>Alfalak Pro ERP</strong></div></div>
          </div>
        </div>
      </div></div>
    </section>
  );
}

export default About;
