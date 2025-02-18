import { motion } from 'framer-motion';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Three overlapping squares */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`absolute inset-0 border border-purple-500 dark:border-purple-400 transition-colors duration-300 rotate-90
            ${i === 0 ? '-translate-y-2 translate-x-2' : 
              i === 1 ? '-translate-y-1 translate-x-1' : ''}`}
        />
      ))}
      {/* Center square */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}