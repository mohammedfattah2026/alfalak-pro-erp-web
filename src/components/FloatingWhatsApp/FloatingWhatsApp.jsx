import { useTranslation } from "react-i18next";
import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  const { t } = useTranslation();
  const message = encodeURIComponent(t("whatsapp.message"));

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/966550480954?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.label")}
    >
      <span>{t("whatsapp.shortLabel")}</span>
      <MessageCircle size={25} />
    </a>
  );
}

export default FloatingWhatsApp;
