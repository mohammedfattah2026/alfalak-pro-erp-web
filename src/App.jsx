import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Showcase from "./components/Showcase/Showcase";


import Solutions from "./components/Solutions/Solutions";
import Features from "./components/Features/Features";
import Modules from "./components/Modules/Modules";

import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";

import Integrations from "./components/Integrations/Integrations";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";

const PLAN_URL = "https://alfalak.alfalaksoft2025.ddns.net:441/SUBSCRIPTION_PLAN_FEATURES";

function PricingRedirect() {
  useEffect(() => { window.location.replace(PLAN_URL); }, []);
  return null;
}

function SystemPage() {
  const [tab, setTab] = useState("showcase");
  return <div className="system-page">
    <div className="system-page-tabs" role="tablist" aria-label="System sections">
      <button role="tab" aria-selected={tab === "showcase"} className={tab === "showcase" ? "selected" : ""} onClick={() => setTab("showcase")}>صور النظام / Screenshots</button>
      <button role="tab" aria-selected={tab === "modules"} className={tab === "modules" ? "selected" : ""} onClick={() => setTab("modules")}>وحدات النظام / Modules</button>
      <button role="tab" aria-selected={tab === "integrations"} className={tab === "integrations" ? "selected" : ""} onClick={() => setTab("integrations")}>التكاملات / Integrations</button>
    </div>
    {tab === "showcase" ? <Showcase /> : tab === "modules" ? <Modules /> : <Integrations />}
  </div>;
}

function App() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "ar";

  useEffect(() => {
    const isArabic = language.startsWith("ar");
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = t("meta.title");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("meta.description"));
  }, [language, t]);

  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <Navbar />

      <main className="site-page-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/system" element={<SystemPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<PricingRedirect />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>


      <FloatingWhatsApp />
    </>
  );
}

export default App;
