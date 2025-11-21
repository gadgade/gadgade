import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import { Link } from '@/components/Router';

// Define window properties for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = 'G-35T8BYGKVC';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  // useEffect(() => {
  //   const consent = localStorage.getItem('cookieConsent');
    
  //   // Initialize dataLayer
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(...args: any[]) {
  //     window.dataLayer.push(args);
  //   }
  //   window.gtag = gtag;

  //   // Default Consent Mode v2 Setup
  //   // We set defaults immediately before loading the script
  //   if (consent === null) {
  //     setIsVisible(true);
  //     gtag('consent', 'default', {
  //       'ad_storage': 'denied',
  //       'ad_user_data': 'denied',
  //       'ad_personalization': 'denied',
  //       'analytics_storage': 'denied'
  //     });
  //   } else if (consent === 'true') {
  //     gtag('consent', 'default', {
  //       'ad_storage': 'granted',
  //       'ad_user_data': 'granted',
  //       'ad_personalization': 'granted',
  //       'analytics_storage': 'granted'
  //     });
  //   } else {
  //     gtag('consent', 'default', {
  //       'ad_storage': 'denied',
  //       'ad_user_data': 'denied',
  //       'ad_personalization': 'denied',
  //       'analytics_storage': 'denied'
  //     });
  //   }

  //   // Load Google Tag Script (gtag.js)
  //   const scriptId = 'google-analytics-script';
  //   if (!document.getElementById(scriptId)) {
  //     const script = document.createElement('script');
  //     script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  //     script.async = true;
  //     script.id = scriptId;
  //     document.head.appendChild(script);

  //     // Config command
  //     gtag('js', new Date());
  //     gtag('config', GA_MEASUREMENT_ID);
  //   }
  // }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    
    window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
    
    window.gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-white dark:bg-brand-charcoal border border-gray-200 dark:border-white/10 shadow-2xl rounded-3xl p-6 md:flex items-center justify-between gap-6 backdrop-blur-xl bg-white/95 dark:bg-brand-charcoal/95">
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-lg font-bold font-serif text-brand-navy dark:text-white mb-2">
                We value your privacy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {t('cookieConsent.message')}{' '}
                <Link to="/privacy-policy" className="text-brand-gold hover:underline font-medium">
                  {t('cookieConsent.learnMore')}
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 font-bold text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              >
                {t('cookieConsent.decline')}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-full bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy font-bold text-sm hover:bg-brand-navy-light hover:shadow-lg transition-all"
              >
                {t('cookieConsent.accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;