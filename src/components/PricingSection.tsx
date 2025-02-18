import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const plans = [
  {
    nameKey: 'pricing.basic.name',
    price: {
      monthly: 49,
      yearly: 42
    },
    descriptionKey: 'pricing.basic.description',
    featuresKey: 'pricing.basic.features'
  },
  {
    nameKey: 'pricing.standard.name',
    price: {
      monthly: 79,
      yearly: 67
    },
    descriptionKey: 'pricing.standard.description',
    featuresKey: 'pricing.standard.features',
    popular: true
  },
  {
    nameKey: 'pricing.premium.name',
    price: {
      monthly: 199,
      yearly: 169
    },
    descriptionKey: 'pricing.premium.description',
    featuresKey: 'pricing.premium.features'
  },
  {
    nameKey: 'pricing.enterprise.name',
    price: {
      monthly: 499,
      yearly: 424
    },
    descriptionKey: 'pricing.enterprise.description',
    featuresKey: 'pricing.enterprise.features',
    enterprise: true
  }
];

export default function PricingSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section ref={ref} id="pricing" className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              {t('pricing.billing.monthly')}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <span className="sr-only">{t('pricing.billing.toggle')}</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              {t('pricing.billing.annual')} <span className="text-green-500 font-medium">{t('pricing.billing.discount')}</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.nameKey}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg ${
                plan.popular ? 'ring-2 ring-purple-500' : 'ring-1 ring-gray-200 dark:ring-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    {t('pricing.most_popular')}
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{t(plan.nameKey)}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                  {t(plan.descriptionKey)}
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    {isAnnual ? plan.price.yearly : plan.price.monthly}€
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">{t('pricing.per_month')}</span>
                </div>
              </div>

              <ul className="space-y-4">
                {t(plan.featuresKey).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}