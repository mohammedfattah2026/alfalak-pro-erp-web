import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(window.innerWidth < 768 ? 3 : 5);
  useEffect(() => {const update=()=>{setPageSize(window.innerWidth < 768 ? 3 : 5);setPage(0);setOpenIndex(-1)};window.addEventListener("resize",update);return()=>window.removeEventListener("resize",update)}, []);
  const { t } = useTranslation();
  const questions = t("faq.items", { returnObjects: true });

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up"><span className="section-label">{t("faq.label")}</span><h2>{t("faq.titleStart")}<span>{t("faq.titleAccent")}</span></h2><p>{t("faq.description")}</p></div>
        <div className="faq-list" data-aos="fade-up">
          {questions.slice(page*pageSize,(page+1)*pageSize).map((item, index) => {
            const realIndex=page*pageSize+index;
            const isOpen = openIndex === realIndex;
            return <div className={`faq-item ${isOpen ? "active" : ""}`} key={item.question}><button type="button" className="faq-question" onClick={() => setOpenIndex(isOpen ? -1 : realIndex)} aria-expanded={isOpen}><span>{item.question}</span><span className="faq-icon">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span></button>{isOpen && <div className="faq-answer"><p>{item.answer}</p></div>}</div>;
          })}
        </div>
        {questions.length > pageSize && <div className="page-controls"><button disabled={page===0} onClick={()=>{setPage(n=>n-1);setOpenIndex(-1)}}>‹</button><span>{page+1} / {Math.ceil(questions.length/pageSize)}</span><button disabled={(page+1)*pageSize>=questions.length} onClick={()=>{setPage(n=>n+1);setOpenIndex(-1)}}>›</button></div>}
      </div>
    </section>
  );
}

export default FAQ;
