import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Clock, Calendar, FileText, Globe, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    icon: Phone,
    titleKey: 'services.voice-assistant.title',
    descriptionKey: 'services.voice-assistant.description',
    gradient: 'bg-pink-50 dark:bg-gray-900',
    iconColor: 'text-pink-500'
  },
  {
    icon: Clock,
    titleKey: 'services.24-7.title',
    descriptionKey: 'services.24-7.description',
    gradient: 'bg-purple-50 dark:bg-gray-900',
    iconColor: 'text-purple-500'
  },
  {
    icon: Calendar,
    titleKey: 'services.error-free.title',
    descriptionKey: 'services.error-free.description',
    gradient: 'bg-blue-50 dark:bg-gray-900',
    iconColor: 'text-blue-500'
  },
  {
    icon: FileText,
    titleKey: 'services.tracking.title',
    descriptionKey: 'services.tracking.description',
    gradient: 'bg-green-50 dark:bg-gray-900',
    iconColor: 'text-green-500'
  },
  {
    icon: Globe,
    titleKey: 'services.multilingual.title',
    descriptionKey: 'services.multilingual.description',
    gradient: 'bg-yellow-50 dark:bg-gray-900',
    iconColor: 'text-yellow-500'
  },
  {
    icon: Zap,
    titleKey: 'services.integration.title',
    descriptionKey: 'services.integration.description',
    gradient: 'bg-orange-50 dark:bg-gray-900',
    iconColor: 'text-orange-500'
  }
];

export default function Services() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="services" className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card-hover group relative p-8 rounded-2xl ${service.gradient}`}
            >
              <div className={`w-16 h-16 mb-6 rounded-xl bg-white dark:bg-white/10 backdrop-blur-sm p-4 
                transform group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                <service.icon className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                {t(service.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}