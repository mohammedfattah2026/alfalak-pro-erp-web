import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FileCheck2, ScanBarcode, CreditCard, HandCoins, ArrowLeft } from "lucide-react";

const icons = [FileCheck2, ScanBarcode, CreditCard, HandCoins];

function Integrations() {
  const [page,setPage] = useState(0);
  const [pageSize,setPageSize] = useState(() => window.innerWidth < 768 ? 2 : window.innerHeight < 920 ? 4 : 8);
  useEffect(() => { const update=()=>{setPageSize(window.innerWidth < 768 ? (window.innerHeight < 680 ? 1 : 2) : window.innerHeight < 920 ? 4 : 8);setPage(0)}; window.addEventListener("resize",update);return ()=>window.removeEventListener("resize",update)}, []);
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
          {items.slice(page * pageSize,(page+1)*pageSize).map((item, index) => {
            const Icon = icons[page * pageSize + index];
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
          <a href="/contact">{t("integrations.cta")}<ArrowLeft className="directional-icon" size={18} /></a>
        </div>
        {items.length > pageSize && <div className="page-controls"><button type="button" disabled={page===0} onClick={()=>setPage(n=>n-1)}>‹</button><span>{page+1} / {Math.ceil(items.length/pageSize)}</span><button type="button" disabled={(page+1)*pageSize >= items.length} onClick={()=>setPage(n=>n+1)}>›</button></div>}
      </div>
    </section>
  );
}

export default Integrations;
