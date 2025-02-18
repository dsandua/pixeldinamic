import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { lazy, Suspense } from 'react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  }),
};

// Lazy load the video button component
const VideoButton = lazy(() => import('./VideoButton'));

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-white dark:bg-black transition-colors duration-300"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black/90 dark:from-purple-900/30 dark:to-black/80" />
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
        </motion.div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="overflow-hidden"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              {t('hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                {t('hero.title.highlight')}
              </span>
              {t('hero.title.with-ai')}
            </h1>
          </motion.div>
          
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-100 dark:text-gray-300 mb-12 max-w-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-[2px] rounded-full"
            >
              <div className="bg-white dark:bg-black rounded-full px-8 py-4 transition group-hover:bg-transparent">
                <span className="text-gray-900 dark:text-white font-medium transition group-hover:text-white">
                  {t('hero.cta.demo')}
                </span>
              </div>
            </motion.button>

            <Suspense fallback={null}>
              <VideoButton />
            </Suspense>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}