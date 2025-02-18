import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={onToggle}
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 24 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
          <p className="text-gray-600 dark:text-gray-300">
            {answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section ref={ref} id="faq" className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('pricing.faq.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <FAQItem
              key={num}
              question={t(`pricing.faq.${num}.question`) as string}
              answer={t(`pricing.faq.${num}.answer`) as string}
              isOpen={openItems.includes(num)}
              onToggle={() => toggleItem(num)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}