import React from 'react';
import { Link } from '@/components/Router';
import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative h-screen w-full sticky top-0 z-0 flex items-center justify-center overflow-hidden"
    >
      
      {/* 1. Full Screen Sticky Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://res.cloudinary.com/dph6mqggr/image/upload/f_auto,q_auto/v1762218893/banner_cj0zgv.jpg" 
          alt="Gadgade Basic School"
          className="w-full h-full object-cover blur-md" 
        />
        
        {/* Sophisticated Overlays for Depth and Readability */}
        <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-transparent to-brand-navy/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      {/* 2. Centered Hero Content */}
      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl mt-16">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="inline-block mb-6"
        >
             <div className="flex items-center justify-center gap-3 py-2 px-6 rounded-full bg-white/10 border border-white/20 text-brand-gold text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span>Est. 1993 / 2050 BS</span>
             </div>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-serif text-white mb-8 leading-[1.1] drop-shadow-2xl"
        >
            {language === 'ne' ? (
                <>
                    <span className="block text-gray-200 text-3xl md:text-5xl font-normal mb-4">{t('hero.welcome1')}</span>
                    <span className="text-brand-gold">{t('hero.welcome2')}</span>
                </>
            ) : (
                <>
                    <span className="block text-gray-300 text-2xl md:text-4xl font-sans font-light tracking-wide mb-4">{t('hero.welcome1')}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-gold to-amber-200 filter drop-shadow-lg">{t('hero.welcome2')}</span>
                </>
            )}
        </motion.h1>
        
        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light text-shadow-sm"
        >
            {t('hero.slogan')}
            <span className="block mt-2 text-gray-400 text-base md:text-lg">
                Empowering the next generation of Nagarkot with free, quality education.
            </span>
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
            <Link 
                to="/academics" 
                className="min-w-[200px] bg-brand-gold text-brand-navy font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(191,161,129,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transform hover:-translate-y-1"
            >
                Our Academics
            </Link>
            <Link 
                to="/contact"
                className="min-w-[200px] bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:border-white/40"
            >
                {t('contact.title')}
            </Link>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;