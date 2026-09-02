import { useTranslation } from "react-i18next";
import { FileCheck2, ScanBarcode, CreditCard, HandCoins, ArrowLeft } from "lucide-react";

const icons = [FileCheck2, ScanBarcode, CreditCard, HandCoins];

function Integrations() {
  const { t } = useTranslation();
  const items = t("integrations.items", { returnObjects: true });

  return (
    <section id="integrations" className="integrations-section">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up">
          <span className="section-label">{t("integrations.label")}</span>
          <h2>{t("integrations.titleStart")}<span>{t("integrations.titleAccent")}</span></h2>
          <p>{t("integrations.description")}</p>
        </div>

        <div className="row g-4">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div className="col-sm-6 col-xl-3" key={item.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <article className="integration-card">
                  <div className="integration-icon"><Icon size={25} /></div>
                  <span className="integration-status">{t("integrations.status")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </div>
            );
          })}
        </div>

        <div className="integrations-note">
          <p>{t("integrations.note")}</p>
          <a href="#contact-us">{t("integrations.cta")}<ArrowLeft className="directional-icon" size={18} /></a>
        </div>
      </div>
    </section>
  );
}

export default Integrations;
