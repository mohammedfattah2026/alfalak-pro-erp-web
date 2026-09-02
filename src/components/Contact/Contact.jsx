import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

const initialForm = {
  name: "",
  business: "",
  phone: "",
  email: "",
  plan: "",
  message: "",
};

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const contactItems = [
    { icon: Phone, href: "https://wa.me/966532499058", label: t("contact.generalManager"), value: "0532499058" },
    { icon: Phone, href: "https://wa.me/966550480954", label: t("contact.customerService"), value: "0550480954" },
    { icon: MessageCircle, href: "https://wa.me/966550480954", label: t("contact.whatsapp"), value: "0550480954" },
    { icon: Mail, href: "mailto:alfalaksoft.pro@gmail.com", label: t("contact.email"), value: "alfalaksoft.pro@gmail.com" },
    { icon: MapPin, href: "https://maps.app.goo.gl/nYWMhaLCaraReJw46?g_st=ic", label: t("contact.khamisBranch"), value: t("contact.khamisAddress") },
    { icon: MapPin, href: "https://maps.app.goo.gl/654eWdd5dnhA7pHs6?g_st=ic", label: t("contact.sabyaBranch"), value: t("contact.sabyaAddress") },
  ];

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const submitToWhatsApp = (event) => {
    event.preventDefault();
    const planLabel = event.currentTarget.elements.plan.selectedOptions[0]?.text || "-";
    const lines = [
      `*${t("contact.requestTitle")}*`,
      "",
      `${t("contact.requestName")}: ${formData.name}`,
      `${t("contact.requestBusiness")}: ${formData.business || "-"}`,
      `${t("contact.requestPhone")}: ${formData.phone}`,
      `${t("contact.requestEmail")}: ${formData.email || "-"}`,
      `${t("contact.requestPlan")}: ${planLabel}`,
      `${t("contact.requestMessage")}: ${formData.message || "-"}`,
    ];

    window.open(`https://wa.me/966550480954?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact-us" className="contact-section">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up">
          <span className="section-label">{t("contact.label")}</span>
          <h2>{t("contact.titleStart")}<span>{t("contact.titleAccent")}</span></h2>
          <p>{t("contact.description")}</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5" data-aos="fade-left">
            <div className="contact-info">
              <h3>{t("contact.talkToUs")}</h3>
              <p>{t("contact.infoText")}</p>
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={`${item.label}-${item.value}`} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-item text-decoration-none">
                    <div><Icon size={20} /></div>
                    <span>{item.label}<strong>{item.value}</strong></span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-right">
            <form className="contact-form" onSubmit={submitToWhatsApp}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="contact-name">{t("contact.name")}</label>
                  <input id="contact-name" name="name" type="text" value={formData.name} onChange={updateField} placeholder={t("contact.namePlaceholder")} autoComplete="name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-business">{t("contact.businessName")}</label>
                  <input id="contact-business" name="business" type="text" value={formData.business} onChange={updateField} placeholder={t("contact.businessPlaceholder")} autoComplete="organization" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-phone">{t("contact.phone")}</label>
                  <input id="contact-phone" name="phone" type="tel" value={formData.phone} onChange={updateField} placeholder={t("contact.phonePlaceholder")} autoComplete="tel" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-email">{t("contact.email")}</label>
                  <input id="contact-email" name="email" type="email" value={formData.email} onChange={updateField} placeholder="example@email.com" autoComplete="email" />
                </div>
                <div className="col-12">
                  <label htmlFor="contact-plan">{t("contact.requestedPlan")}</label>
                  <select id="contact-plan" name="plan" value={formData.plan} onChange={updateField} required>
                    <option value="" disabled>{t("contact.choosePlan")}</option>
                    <option value="99">{t("contact.startPlan")}</option>
                    <option value="199">{t("contact.businessPlan")}</option>
                    <option value="399">{t("contact.proPlan")}</option>
                    <option value="enterprise">{t("contact.enterprisePlan")}</option>
                    <option value="help">{t("contact.helpPlan")}</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="contact-message">{t("contact.message")}</label>
                  <textarea id="contact-message" name="message" rows="5" value={formData.message} onChange={updateField} placeholder={t("contact.messagePlaceholder")} />
                </div>
                <div className="col-12">
                  <button type="submit">{t("contact.submit")}<Send size={17} /></button>
                </div>
                {submitted && <div className="col-12"><div className="contact-success" role="status"><CheckCircle2 size={19} /><span>{t("contact.success")}</span></div></div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
