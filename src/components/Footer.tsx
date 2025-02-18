import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-[#0B1121] text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Pixel Dinamic
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick-links')}</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('root')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.how-it-works')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('work')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.benefits')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cases')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.success-cases')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.pricing')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:info@pixeldinamic.com" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>info@pixeldinamic.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+34900123456" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>+34 654 937 753</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.follow-us')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/pixeldinamic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/pixeldinamic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Síguenos en X"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/pixeldinamic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Síguenos en LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Pixel Dinamic. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}