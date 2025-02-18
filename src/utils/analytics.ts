import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const IS_PRODUCTION = import.meta.env.PROD;

// Initialize gtag
export const initializeGA = () => {
  if (!IS_PRODUCTION) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false // Disable automatic page views
  });
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (!IS_PRODUCTION || !window.gtag) return;

  try {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title,
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Track custom events
export const trackEvent = ({ action, category, label, value, ...rest }: GtagEvent) => {
  if (!IS_PRODUCTION || !window.gtag) return;

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
      ...rest,
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Hook for automatic page view tracking
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
};