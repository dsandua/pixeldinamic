import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Utensils, Hotel, Building, ClipboardList, Space as Spa, Dumbbell, GraduationCap, Wrench, Briefcase, Dog, Building2, Heart, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const cases = [
  {
    icon: Utensils,
    titleKey: 'cases.restaurants.title',
    descriptionKey: 'cases.restaurants.description',
    gradient: 'bg-orange-50 dark:bg-gray-900',
    iconColor: 'text-orange-400'
  },
  {
    icon: Hotel,
    titleKey: 'cases.hotels.title',
    descriptionKey: 'cases.hotels.description',
    gradient: 'bg-blue-50 dark:bg-gray-900',
    iconColor: 'text-blue-400'
  },
  {
    icon: Building,
    titleKey: 'cases.clinics.title',
    descriptionKey: 'cases.clinics.description',
    gradient: 'bg-red-50 dark:bg-gray-900',
    iconColor: 'text-red-400'
  },
  {
    icon: ({ className }) => (
      <div className={className + " relative"}>
        <ClipboardList className="absolute inset-0" />
        <Activity className="absolute inset-0 w-1/2 h-1/2 translate-x-1/2 translate-y-full" />
      </div>
    ),
    titleKey: 'cases.medical.title',
    descriptionKey: 'cases.medical.description',
    gradient: 'bg-emerald-50 dark:bg-gray-900',
    iconColor: 'text-emerald-400'
  },
  {
    icon: Spa,
    titleKey: 'cases.spas.title',
    descriptionKey: 'cases.spas.description',
    gradient: 'bg-purple-50 dark:bg-gray-900',
    iconColor: 'text-purple-400'
  },
  {
    icon: Heart,
    titleKey: 'cases.beauty.title',
    descriptionKey: 'cases.beauty.description',
    gradient: 'bg-pink-50 dark:bg-gray-900',
    iconColor: 'text-pink-400'
  },
  {
    icon: Dumbbell,
    titleKey: 'cases.gyms.title',
    descriptionKey: 'cases.gyms.description',
    gradient: 'bg-yellow-50 dark:bg-gray-900',
    iconColor: 'text-yellow-400'
  },
  {
    icon: GraduationCap,
    titleKey: 'cases.academies.title',
    descriptionKey: 'cases.academies.description',
    gradient: 'bg-cyan-50 dark:bg-gray-900',
    iconColor: 'text-cyan-400'
  },
  {
    icon: Wrench,
    titleKey: 'cases.mechanics.title',
    descriptionKey: 'cases.mechanics.description',
    gradient: 'bg-slate-50 dark:bg-gray-900',
    iconColor: 'text-slate-400'
  },
  {
    icon: Briefcase,
    titleKey: 'cases.consulting.title',
    descriptionKey: 'cases.consulting.description',
    gradient: 'bg-amber-50 dark:bg-gray-900',
    iconColor: 'text-amber-400'
  },
  {
    icon: Dog,
    titleKey: 'cases.veterinary.title',
    descriptionKey: 'cases.veterinary.description',
    gradient: 'bg-teal-50 dark:bg-gray-900',
    iconColor: 'text-teal-400'
  },
  {
    icon: Building2,
    titleKey: 'cases.coworking.title',
    descriptionKey: 'cases.coworking.description',
    gradient: 'bg-violet-50 dark:bg-gray-900',
    iconColor: 'text-violet-400'
  }
];

export default function SuccessCases() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="cases" className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cases.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cases.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card-hover group relative p-4 rounded-xl ${item.gradient}`}
            >
              <div className={`w-12 h-12 mb-4 rounded-lg bg-white dark:bg-white/10 backdrop-blur-sm p-2.5 
                transform group-hover:scale-110 transition-transform duration-300 ${item.iconColor}`}>
                <item.icon className="w-full h-full" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                {t(item.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}