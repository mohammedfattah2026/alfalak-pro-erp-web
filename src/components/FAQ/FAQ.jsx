import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation();
  const questions = t("faq.items", { returnObjects: true });

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up"><span className="section-label">{t("faq.label")}</span><h2>{t("faq.titleStart")}<span>{t("faq.titleAccent")}</span></h2><p>{t("faq.description")}</p></div>
        <div className="faq-list" data-aos="fade-up">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return <div className={`faq-item ${isOpen ? "active" : ""}`} key={item.question}><button type="button" className="faq-question" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}><span>{item.question}</span><span className="faq-icon">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span></button>{isOpen && <div className="faq-answer"><p>{item.answer}</p></div>}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
