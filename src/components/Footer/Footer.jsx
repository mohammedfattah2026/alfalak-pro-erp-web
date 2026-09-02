import { useTranslation } from "react-i18next";
import { Share2, Camera, BriefcaseBusiness, Send, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-section"><div className="container">
      <div className="footer-main">
        <div className="footer-brand"><div className="footer-logo"><div className="footer-logo-mark">FP</div><div><strong>{t("common.brand")}</strong><span>ERP</span></div></div><p>{t("footer.description")}</p><div className="footer-social"><a href="#" aria-label="Facebook"><Share2 size={17} /></a><a href="#" aria-label="Instagram"><Camera size={17} /></a><a href="#" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a><a href="#" aria-label="Telegram"><Send size={17} /></a></div></div>
        <div className="footer-links"><h4>{t("footer.quickLinks")}</h4><a href="#features">{t("footer.features")}</a><a href="#pricing">{t("footer.pricing")}</a><a href="#about">{t("footer.about")}</a><a href="#faq">{t("footer.faq")}</a></div>
        <div className="footer-links"><h4>{t("footer.product")}</h4><a href="#solutions">{t("footer.solutions")}</a><a href="#erp">{t("footer.modules")}</a><a href="#integrations">{t("footer.integrations")}</a><a href="#pricing">{t("footer.plans")}</a></div>
        <div className="footer-contact"><h4>{t("footer.contact")}</h4><div><Phone size={17} /><span>{t("footer.customerService")}</span></div><div><Mail size={17} /><span>{t("footer.email")}</span></div><div><MapPin size={17} /><span>{t("footer.location")}</span></div></div>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} {t("footer.rights")}</p><div className="footer-legal"><a href="#">{t("footer.privacy")}</a><a href="#">{t("footer.terms")}</a></div><button type="button" className="back-top" onClick={scrollToTop} aria-label={t("footer.backToTop")}><ArrowUp size={18} /></button></div>
    </div></footer>
  );
}

export default Footer;
