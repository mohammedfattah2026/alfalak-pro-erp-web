import { useTranslation } from "react-i18next";
import { ArrowLeft, Play, CheckCircle2 } from "lucide-react";

function Hero() {
  const { t } = useTranslation();
  const benefits = t("hero.benefits", { returnObjects: true });

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-badge"><span className="badge-dot" />{t("hero.badge")}</div>
              <h1>
                {t("hero.titleStart")}<span>{t("hero.titleAccent")}</span><br />{t("hero.titleEnd")}
              </h1>
              <p className="hero-description">{t("hero.description")}</p>
              <div className="hero-actions">
                <a href="#pricing" className="hero-primary-btn">
                  {t("hero.primaryAction")}<ArrowLeft className="directional-icon" size={19} />
                </a>
                <a href="#showcase" className="hero-secondary-btn"><Play size={18} />{t("hero.secondaryAction")}</a>
              </div>
              <div className="hero-benefits">
                {benefits.map((benefit) => <div key={benefit}><CheckCircle2 size={17} /><span>{benefit}</span></div>)}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-dashboard">
              <div className="dashboard-glow" />
              <div className="dashboard-window">
                <div className="dashboard-header">
                  <div className="dashboard-dots"><span /><span /><span /></div>
                  <div className="dashboard-title">Alfalak Pro ERP</div>
                </div>
                <div className="dashboard-body">
                  <aside className="dashboard-sidebar">
                    <div className="sidebar-logo">FP</div>
                    <div className="sidebar-line active" /><div className="sidebar-line" /><div className="sidebar-line" /><div className="sidebar-line" /><div className="sidebar-line" />
                  </aside>
                  <div className="dashboard-content">
                    <div className="dashboard-welcome">
                      <div><small>{t("hero.welcome")}</small><h4>{t("hero.dashboard")}</h4></div>
                      <div className="dashboard-avatar">A</div>
                    </div>
                    <div className="dashboard-cards">
                      <div className="mini-card"><small>{t("hero.salesTotal")}</small><strong>125,450</strong><span>{t("common.sar")}</span></div>
                      <div className="mini-card"><small>{t("hero.netProfit")}</small><strong>38,250</strong><span>{t("common.sar")}</span></div>
                      <div className="mini-card"><small>{t("hero.invoices")}</small><strong>1,284</strong><span>{t("common.invoice")}</span></div>
                    </div>
                    <div className="dashboard-chart">
                      <div className="chart-header"><strong>{t("hero.sales")}</strong><span>{t("hero.lastSevenDays")}</span></div>
                      <div className="chart-bars">{[45, 65, 50, 80, 60, 90, 72].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom-shape" />
    </section>
  );
}

export default Hero;
