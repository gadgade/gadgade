
import React from 'react';
import { useLanguage } from './LanguageProvider';
// FIX: Import Variants type from framer-motion
import { motion, Variants } from 'framer-motion';
import ChevronDownIcon from './icons/ChevronDownIcon';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  // FIX: Explicitly type variants with Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } }
  };

  // FIX: Explicitly type variants with Variants
  const itemVariants: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id="home" className="h-screen relative flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Google Map Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-navy z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.938172408696!2d85.5143231107501!3d27.719195176076454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb04290d5c71dd%3A0x668663417515bd17!2sShree%20Gadgade%20Basic%20School!5e0!3m2!1sen!2snp!4v1762211904828!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none filter grayscale brightness-50 opacity-50"
        ></iframe>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-navy/60 via-brand-navy/80 to-brand-navy z-10"></div>

      <motion.div 
        className="relative z-20 p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-black font-serif mb-4">
            {language === 'ne' ? (
                <>
                    <span className="text-brand-gold">{t('hero.welcome2')}</span>
                    {t('hero.welcome1')}
                </>
            ) : (
                <>
                    {t('hero.welcome1')}
                    <span className="text-brand-gold">{t('hero.welcome2')}</span>
                </>
            )}
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">{t('hero.slogan')}</motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
                href="#about" 
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold py-3 px-8 rounded-full text-lg inline-block w-full sm:w-auto transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                >
              {t('hero.learnMore')}
            </motion.a>
            <motion.a 
                href="https://www.google.com/maps/search/?api=1&query=Shree+Gadgade+Basic+School&query_place_id=0x39eb04290d5c71dd:0x668663417515bd17"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-brand-gold text-white hover:bg-brand-gold hover:text-brand-navy font-bold py-3 px-8 rounded-full text-lg inline-block w-full sm:w-auto transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                >
              {t('hero.seeOnMap')}
            </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a href="#about" aria-label="Scroll down">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDownIcon className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
          </motion.div>
        </a>
      </div>

    </section>
  );
};

export default Hero;