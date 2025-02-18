import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import SuccessCases from './components/SuccessCases';
import CTASection from './components/CTASection';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import NotFound from './components/NotFound';
import BrowserCompatWarning from './components/BrowserCompatWarning';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { usePageTracking } from './utils/analytics';

function MainContent() {
  const location = useLocation();
  usePageTracking();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white dark:bg-black transition-colors duration-300"
      >
        <BrowserCompatWarning />
        <Navbar />
        <Routes location={location}>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Work />
              <SuccessCases />
              <CTASection />
              <PricingSection />
              <FAQ />
              <Contact />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;