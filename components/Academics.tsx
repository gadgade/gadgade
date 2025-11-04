
import React from 'react';
import BookOpenIcon from './icons/BookOpenIcon';
import { useLanguage } from './LanguageProvider';
// FIX: Import Variants type from framer-motion
import { motion, Variants } from 'framer-motion';
import GraduationCapIcon from './icons/GraduationCapIcon';
import ClipboardListIcon from './icons/ClipboardListIcon';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-brand-charcoal-light p-8 rounded-2xl shadow-lg border border-transparent transition-all duration-300 hover:shadow-2xl hover:border-brand-gold/50 hover:-translate-y-2">
    <div className="bg-brand-gold text-white rounded-full p-4 inline-block mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-2">{title}</h3>
    <p className="text-text-medium dark:text-gray-300 text-left md:text-justify">{description}</p>
  </div>
);

const Academics: React.FC = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: <BookOpenIcon className="w-8 h-8"/>,
      title: t('academics.programTitle'),
      description: t('academics.programDesc')
    },
  ];

  const steps = [
    {
      step: 1,
      title: t('admissions.step1Title'),
      description: t('admissions.step1Desc'),
    },
    {
      step: 2,
      title: t('admissions.step2Title'),
      description: t('admissions.step2Desc'),
    },
    {
      step: 3,
      title: t('admissions.step3Title'),
      description: t('admissions.step3Desc'),
    },
    {
      step: 4,
      title: t('admissions.step4Title'),
      description: t('admissions.step4Desc'),
    },
  ];

  // FIX: Explicitly type variants with Variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  // FIX: Explicitly type variants with Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // FIX: Explicitly type variants with Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="academics" className="overflow-hidden">
      <motion.div 
        className="py-24 px-8 bg-brand-cream dark:bg-brand-charcoal"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-4 flex items-center justify-center gap-4">
                    <GraduationCapIcon className="w-12 h-12 text-brand-gold flex-shrink-0" />
                    <span>{t('academics.title')}</span>
                </h2>
                <p className="text-lg text-text-medium dark:text-gray-300 max-w-3xl mx-auto">{t('academics.subtitle')}</p>
            </div>
            <motion.div 
                className="bg-white dark:bg-brand-charcoal-light p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 dark:border-white/10 max-w-3xl mx-auto"
                variants={itemVariants}
            >
                {programs.map((program, index) => (
                    <ProgramCard key={index} {...program} />
                ))}
            </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="py-24 px-8 bg-brand-navy text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 flex items-center justify-center gap-4">
                    <ClipboardListIcon className="w-10 h-10 text-brand-gold flex-shrink-0" />
                    <span>{t('admissions.title')}</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-300">
                    {t('admissions.subtitle')}
                </p>
            </div>
            <motion.div 
                className="bg-white/5 dark:bg-brand-charcoal-light/50 p-8 md:p-12 rounded-3xl shadow-xl max-w-6xl mx-auto border border-white/10"
                variants={containerVariants}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((item) => (
                  <motion.div 
                      key={item.step} 
                      className="p-6 bg-white/10 dark:bg-white/5 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                      variants={itemVariants}
                  >
                    <div className="text-4xl font-extrabold text-brand-gold mb-3">{`0${item.step}`}</div>
                    <h3 className="text-xl font-bold font-serif mb-2">{item.title}</h3>
                    <p className="text-white/80 text-left md:text-justify">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 text-center">
                  <motion.a 
                      href="#contact" 
                      className="bg-brand-gold hover:bg-brand-gold-light transition-colors text-brand-navy font-bold py-3 px-8 rounded-full text-lg inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                  >
                      {t('admissions.button')}
                  </motion.a>
              </div>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Academics;