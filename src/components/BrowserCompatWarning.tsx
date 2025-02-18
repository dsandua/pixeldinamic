import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { useBrowserDetection } from '../utils/browserDetection';

export default function BrowserCompatWarning() {
  const { browser, features } = useBrowserDetection();

  if (browser.isModern) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-yellow-50 dark:bg-yellow-900/50 border-b border-yellow-200 dark:border-yellow-800"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
              <p className="text-sm text-yellow-700 dark:text-yellow-200">
                You're using an outdated version of {browser.name} (v{browser.version}).
                For the best experience, please update your browser.
              </p>
            </div>
            <a
              href={getUpdateLink(browser.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-yellow-700 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-100"
            >
              Update now →
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function getUpdateLink(browser: string): string {
  switch (browser) {
    case 'chrome':
      return 'https://www.google.com/chrome/';
    case 'firefox':
      return 'https://www.mozilla.org/firefox/new/';
    case 'safari':
      return 'https://support.apple.com/downloads/safari';
    case 'edge':
      return 'https://www.microsoft.com/edge';
    default:
      return 'https://browsehappy.com/';
  }
}