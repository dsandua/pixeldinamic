import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function VideoButton() {
  const { t } = useLanguage();
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 transition-all hover:bg-white/30 dark:hover:bg-white/20"
    >
      <span className="flex items-center space-x-2 text-white font-medium">
        <Play className="w-5 h-5" />
        <span>{t('hero.cta.video')}</span>
      </span>
    </motion.button>
  );
}