import { useTranslation } from "react-i18next";
import { ExternalLink, BadgeCheck } from "lucide-react";

const PLAN_URL = "https://alfalak.alfalaksoft2025.ddns.net:441/SUBSCRIPTION_PLAN_FEATURES";

export default function Pricing() {
  const { t, i18n } = useTranslation();
  const ar = (i18n.resolvedLanguage || i18n.language || "ar").startsWith("ar");
  return (
    <section id="pricing" className="pricing-section pricing-live-section">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-label">{t("pricing.label")}</span>
          <h2>{t("pricing.titleStart")}<span>{t("pricing.titleAccent")}</span></h2>
          <p>{ar ? "استعرض أحدث الباقات والمزايا والأسعار من النظام مباشرة." : "Browse current packages, features and prices directly from the system."}</p>
        </div>
        <div className="pricing-direct-link">
          <BadgeCheck size={30} aria-hidden="true" />
          <strong>{ar ? "الباقات والأسعار الرسمية" : "Official plans and prices"}</strong>
          <p>{ar ? "تُعرض تفاصيل الاشتراكات في صفحة النظام الرسمية لضمان تحديث الأسعار باستمرار." : "Subscription details are available on the official system page, so pricing stays current."}</p>
          <a className="live-pricing-secondary" href={PLAN_URL} target="_blank" rel="noopener noreferrer">
            {ar ? "عرض جميع الباقات والأسعار" : "View all plans and prices"} <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
