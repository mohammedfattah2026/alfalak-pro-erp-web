import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, Sparkles, ArrowLeft, Gift } from "lucide-react";

function Pricing() {
  const [yearly, setYearly] = useState(false);
  const { t } = useTranslation();
  const plans = t("pricing.plans", { returnObjects: true });

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up">
          <span className="section-label">{t("pricing.label")}</span>
          <h2>{t("pricing.titleStart")}<span>{t("pricing.titleAccent")}</span></h2>
          <p>{t("pricing.description")}</p>
        </div>
        <div className="pricing-toggle" data-aos="fade-up">
          <button type="button" className={!yearly ? "active" : ""} onClick={() => setYearly(false)}>{t("pricing.monthly")}</button>
          <button type="button" className={yearly ? "active" : ""} onClick={() => setYearly(true)}>{t("pricing.yearly")}<span>{t("pricing.twoMonthsFree")}</span></button>
        </div>
        <div className="row g-4 align-items-stretch">
          {plans.map((plan, index) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const annualWithoutDiscount = plan.monthly ? plan.monthly * 12 : null;
            const saving = plan.monthly ? annualWithoutDiscount - plan.yearly : null;
            return (
              <div className="col-md-6 col-xl-3" key={plan.name} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`pricing-card ${plan.popular ? "popular" : ""}`}>
                  {plan.popular && <div className="popular-badge"><Sparkles size={14} />{t("pricing.popular")}</div>}
                  <h3>{plan.title}</h3><p className="pricing-description">{plan.description}</p>
                  <div className="price-box">{price !== null ? <><strong>{price.toLocaleString("en-US")}</strong><span>{t("common.sar")}</span></> : <strong className="custom-price">{t("pricing.custom")}</strong>}</div>
                  {yearly && saving !== null && <div className="yearly-offer"><div className="yearly-old-price">{t("pricing.insteadOf")} <del>{annualWithoutDiscount.toLocaleString("en-US")} {t("common.sar")}</del></div><div className="yearly-saving"><Gift size={14} />{t("pricing.save")} {saving.toLocaleString("en-US")} {t("common.sar")}<span>— {t("pricing.twoMonthsFree")}</span></div></div>}
                  {plan.name === "Enterprise" ? (
                    <a href="https://wa.me/966550480954" target="_blank" rel="noopener noreferrer" className="pricing-btn">{t("common.contactUs")}<ArrowLeft className="directional-icon" size={17} /></a>
                  ) : (
                    <a href="https://alfalak.alfalaksoft2025.ddns.net:441/auth/new-account" className={plan.popular ? "pricing-btn primary" : "pricing-btn"}>{t("common.startNow")}<ArrowLeft className="directional-icon" size={17} /></a>
                  )}
                  <div className="pricing-divider" /><h4>{t("pricing.includes")}</h4>
                  <ul>{plan.features.map((feature) => <li key={feature}><Check size={17} /><span>{feature}</span></li>)}</ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
