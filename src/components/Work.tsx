import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Clock, Calendar, Bell, Settings, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const features = [
  {
    icon: CheckCircle,
    titleKey: 'work.less-errors.title',
    descriptionKey: 'work.less-errors.description',
    gradient: 'bg-emerald-50 dark:bg-gray-900',
    iconColor: 'text-emerald-400'
  },
  {
    icon: Clock,
    titleKey: 'work.save-time.title',
    descriptionKey: 'work.save-time.description',
    gradient: 'bg-cyan-50 dark:bg-gray-900',
    iconColor: 'text-cyan-400'
  },
  {
    icon: Calendar,
    titleKey: 'work.availability.title',
    descriptionKey: 'work.availability.description',
    gradient: 'bg-violet-50 dark:bg-gray-900',
    iconColor: 'text-violet-400'
  },
  {
    icon: Bell,
    titleKey: 'work.reminders.title',
    descriptionKey: 'work.reminders.description',
    gradient: 'bg-pink-50 dark:bg-gray-900',
    iconColor: 'text-pink-400'
  },
  {
    icon: Settings,
    titleKey: 'work.customization.title',
    descriptionKey: 'work.customization.description',
    gradient: 'bg-purple-50 dark:bg-gray-900',
    iconColor: 'text-purple-400'
  },
  {
    icon: Network,
    titleKey: 'work.integration.title',
    descriptionKey: 'work.integration.description',
    gradient: 'bg-blue-50 dark:bg-gray-900',
    iconColor: 'text-blue-400'
  }
];

export default function Work() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="work" className="py-32 bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('work.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card-hover group relative p-8 rounded-2xl ${feature.gradient}`}
            >
              <div className={`w-16 h-16 mb-6 rounded-xl bg-white dark:bg-white/10 backdrop-blur-sm p-4 
                transform group-hover:scale-110 transition-transform duration-300 ${feature.iconColor}`}>
                <feature.icon className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                {t(feature.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}