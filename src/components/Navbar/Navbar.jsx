import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/alfalak-logo.jpeg";
import { Menu, X, Globe, LogIn, ArrowLeft } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navLinks = t("navbar.links", { returnObjects: true });

  const changeLanguage = () => {
    const nextLanguage = i18n.resolvedLanguage === "en" ? "ar" : "en";
    localStorage.setItem("alfalak-language", nextLanguage);
    i18n.changeLanguage(nextLanguage);
    setIsOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <div className="brand-logo">
              <img src={logo} alt="Alfalak Pro ERP" className="brand-image" />
              <div className="brand-text">
                <strong>{t("common.brand")}</strong>
                <span>ERP</span>
              </div>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t("navbar.menuLabel")}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a className="nav-link" href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar-actions">
              <button className="language-btn" type="button" onClick={changeLanguage}>
                <Globe size={18} />
                <span>{t("navbar.language")}</span>
              </button>
              <a href="https://alfalak.alfalaksoft2025.ddns.net:441/auth/login" className="login-btn">
                <LogIn size={18} />
                <span>{t("common.login")}</span>
              </a>
              <a href="https://alfalak.alfalaksoft2025.ddns.net:441/auth/new-account" className="start-btn">
                <span>{t("common.startNow")}</span>
                <ArrowLeft className="directional-icon" size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
