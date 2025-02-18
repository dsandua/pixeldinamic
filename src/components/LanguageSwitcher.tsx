import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="flex items-center space-x-2 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <button
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 rounded-md transition-colors duration-300 ${
          language === 'es'
            ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-900 dark:text-purple-100'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        ES
      </button>
      <span className="text-gray-400">/</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md transition-colors duration-300 ${
          language === 'en'
            ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-900 dark:text-purple-100'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        EN
      </button>
    </motion.div>
  );
}