import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustBar from "./components/TrustBar/TrustBar";
import Showcase from "./components/Showcase/Showcase";
import Solutions from "./components/Solutions/Solutions";
import Features from "./components/Features/Features";
import Modules from "./components/Modules/Modules";
import Pricing from "./components/Pricing/Pricing";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Integrations from "./components/Integrations/Integrations";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";

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

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrustBar />

        <Solutions />

        <Showcase />

        <Modules />

        <Features />

        <Integrations />

        <Pricing />

        <About />

        <FAQ />

        <Contact />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}

export default App;
