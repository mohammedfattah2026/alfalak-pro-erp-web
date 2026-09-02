import { useTranslation } from "react-i18next";
import { Cloud, Building2, Coins, ShieldCheck, BarChart3 } from "lucide-react";

const icons = [Cloud, Building2, Coins, ShieldCheck, BarChart3];

function TrustBar() {
  const { t } = useTranslation();
  const items = t("trust.items", { returnObjects: true });

  return (
    <section className="trust-section">
      <div className="container"><div className="trust-grid">
        {items.map((item, index) => {
          const Icon = icons[index];
          return <div className="trust-item" key={item.title}><div className="trust-icon"><Icon size={22} /></div><div><h3>{item.title}</h3><p>{item.description}</p></div></div>;
        })}
      </div></div>
    </section>
  );
}

export default TrustBar;
