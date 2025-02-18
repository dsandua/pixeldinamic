import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { setConsentCookie, hasValidConsent } from '../utils/cookies';

export default function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(!hasValidConsent());
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: true,
    marketing: false,
  });

  if (!isVisible) return null;

  const handleAcceptAll = () => {
    setConsentCookie({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    setConsentCookie({
      ...preferences,
      necessary: true, // Always required
    });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start justify-between">
              <div className="pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {t('cookies.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('cookies.description')}
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              {showDetails ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  {t('cookies.hide_preferences')}
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  {t('cookies.show_preferences')}
                </>
              )}
            </button>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {t('cookies.necessary.title')}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t('cookies.necessary.description')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {t('cookies.analytics.title')}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t('cookies.analytics.description')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {t('cookies.marketing.title')}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t('cookies.marketing.description')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences({ ...preferences, marketing: e.target.checked })
                        }
                        className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-purple-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                {t('cookies.accept_all')}
              </button>
              {showDetails && (
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  {t('cookies.save_preferences')}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}