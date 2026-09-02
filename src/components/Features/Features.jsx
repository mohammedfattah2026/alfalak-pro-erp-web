import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { Cloud, ShieldCheck, GitBranch, Coins, DatabaseBackup, LockKeyhole, Smartphone, BarChart3 } from "lucide-react";

const icons = [Cloud, ShieldCheck, GitBranch, Coins, DatabaseBackup, LockKeyhole, Smartphone, BarChart3];

function Features() {
  const { t } = useTranslation();
  const features = t("features.items", { returnObjects: true });
  useEffect(() => { AOS.refresh(); }, []);

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up">
          <span className="section-label">{t("features.label")}</span>
          <h2>{t("features.titleStart")}<span>{t("features.titleAccent")}</span></h2>
          <p>{t("features.description")}</p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return <div className="col-sm-6 col-lg-3" key={feature.title} data-aos="fade-up" data-aos-delay={index * 80}><div className="feature-card"><div className="feature-icon"><Icon size={25} /></div><h3>{feature.title}</h3><p>{feature.description}</p></div></div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
