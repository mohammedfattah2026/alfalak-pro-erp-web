import { useTranslation } from "react-i18next";
import { Calculator, ShoppingCart, Package, CreditCard, Users, BarChart3, Building2, Wallet } from "lucide-react";

const icons = [Calculator, ShoppingCart, Package, CreditCard, Users, BarChart3, Building2, Wallet];

function Modules() {
  const { t } = useTranslation();
  const modules = t("modules.items", { returnObjects: true });

  return (
    <section id="erp" className="modules-section">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-label">{t("modules.label")}</span>
          <h2>{t("modules.titleStart")}<span>{t("modules.titleAccent")}</span></h2>
          <p>{t("modules.description")}</p>
        </div>
        <div className="row g-4">
          {modules.map((module, index) => {
            const Icon = icons[index];
            return <div className="col-md-6 col-lg-3" key={module.title}><div className="module-card"><div className="module-icon"><Icon size={24} /></div><h3>{module.title}</h3><p>{module.description}</p><div className="module-arrow directional-arrow">←</div></div></div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Modules;
