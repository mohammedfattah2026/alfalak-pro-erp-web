import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Store, ShoppingCart, Utensils, Building2, Warehouse, Pill, CheckCircle2 } from "lucide-react";

const icons = { retail: Store, supermarket: ShoppingCart, restaurant: Utensils, company: Building2, warehouse: Warehouse, pharmacy: Pill };

function Solutions() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState("retail");
  const solutions = t("solutions.items", { returnObjects: true });
  const activeSolution = solutions.find((solution) => solution.id === activeId) || solutions[0];
  const ActiveIcon = icons[activeSolution.id];

  return (
    <section id="solutions" className="solutions-section">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-label">{t("solutions.label")}</span>
          <h2>{t("solutions.titleStart")}<span>{t("solutions.titleAccent")}</span></h2>
          <p>{t("solutions.description")}</p>
        </div>
        <div className="solutions-tabs">
          {solutions.map((solution) => {
            const Icon = icons[solution.id];
            return <button type="button" key={solution.id} className={`solution-tab ${activeId === solution.id ? "active" : ""}`} onClick={() => setActiveId(solution.id)}><Icon size={20} /><span>{solution.title}</span></button>;
          })}
        </div>
        <div className="solution-content">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="solution-icon"><ActiveIcon size={30} /></div>
              <h3>{activeSolution.title}</h3>
              <p className="solution-description">{activeSolution.description}</p>
              <div className="solution-features">
                {activeSolution.features.map((feature) => <div className="solution-feature" key={feature}><CheckCircle2 size={19} /><span>{feature}</span></div>)}
              </div>
              <a href="#pricing" className="solution-link">{t("solutions.link")}<span className="directional-arrow">←</span></a>
            </div>
            <div className="col-lg-6">
              <div className="solution-visual"><div className="visual-window">
                <div className="visual-header"><div className="visual-dots"><span /><span /><span /></div><span>Alfalak Pro ERP</span></div>
                <div className="visual-body">
                  <div className="visual-sidebar"><div className="visual-logo">FP</div><span /><span /><span /><span /><span /></div>
                  <div className="visual-main">
                    <div className="visual-title"><div><small>{t("solutions.businessManagement")}</small><strong>{activeSolution.title}</strong></div><div className="visual-user" /></div>
                    <div className="visual-stats">
                      <div><small>{t("solutions.sales")}</small><strong>125,450</strong></div>
                      <div><small>{t("solutions.invoices")}</small><strong>1,284</strong></div>
                      <div><small>{t("solutions.itemsLabel")}</small><strong>8,542</strong></div>
                    </div>
                    <div className="visual-table"><div className="table-line header" /><div className="table-line" /><div className="table-line" /><div className="table-line" /><div className="table-line" /></div>
                  </div>
                </div>
              </div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
