import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import { Link } from '@/components/Router';

// Define window properties for TypeScript to avoid errors
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics Measurement ID
// Standard GA4 IDs start with 'G-'. We append it if the user provided ID (35T8BYGKVC) doesn't have it.
const GA_MEASUREMENT_ID = 'G-35T8BYGKVC';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    
    // 1. Initialize dataLayer immediately
    if (!window.dataLayer) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){window.dataLayer.push(arguments);}
    }

    // 2. Handle Default Consent State (Consent Mode v2)
    if (consent === null) {
      // User has not decided yet: Default to 'denied'
      setIsVisible(true);
      window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      });
    } else if (consent === 'true') {
      // User previously accepted: Default to 'granted'
      window.gtag('consent', 'default', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    } else {
      // User previously declined: Default to 'denied'
       window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      });
    }

    // 3. Load the Google Tag Script
    // Even if consent is denied, we load the tag. 
    // Because we set consent to denied above, Google will not set cookies but can send basic pings (if configured).
    loadGoogleTagScript();

  }, []);

  const loadGoogleTagScript = () => {
    if (document.getElementById('google-analytics')) return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    script.id = 'google-analytics';
    document.head.appendChild(script);

    // Configure the specific property
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
    
    console.log('Google Tag initialized (Consent Mode v2 active).');
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    
    // Update consent to 'granted'
    // This immediately activates full tracking without page reload
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
    
    // Explicitly update to denied (redundant if default was denied, but safe)
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
