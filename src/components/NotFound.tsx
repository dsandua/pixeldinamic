import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Search, Home, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function NotFound() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Track search attempt
    trackEvent({
      action: '404_search',
      category: 'Error Pages',
      label: searchQuery,
    });

    // In a real application, you would implement search functionality here
    // For now, we'll just redirect to home
    navigate('/?search=' + encodeURIComponent(searchQuery));
  };

  const navigateHome = () => {
    navigate('/');
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-black dark:to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* 404 Text */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Oops! Page not found
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onSubmit={handleSearch}
          className="mt-8 max-w-md mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our website..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </motion.form>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={goBack}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          <button
            onClick={navigateHome}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '#services', text: 'Services' },
              { href: '#work', text: 'How It Works' },
              { href: '#cases', text: 'Success Cases' },
              { href: '#contact', text: 'Contact Us' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}