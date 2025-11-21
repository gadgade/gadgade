
import React from 'react';
import { Link } from '@/components/Router';
import { useLanguage } from '@/components/LanguageProvider';
import { motion, Variants } from 'framer-motion';
import BookOpenIcon from '@/components/icons/BookOpenIcon';
import GraduationCapIcon from '@/components/icons/GraduationCapIcon';
import ClipboardListIcon from '@/components/icons/ClipboardListIcon';
import BeakerIcon from '@/components/icons/BeakerIcon';
import CalculatorIcon from '@/components/icons/CalculatorIcon';
import GlobeIcon from '@/components/icons/GlobeIcon';
import CheckCircleIcon from '@/components/icons/CheckCircleIcon';
import UserIcon from '@/components/icons/UserIcon';

const Academics: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { step: 1, title: t('admissions.step1Title'), description: t('admissions.step1Desc') },
    { step: 2, title: t('admissions.step2Title'), description: t('admissions.step2Desc') },
    { step: 3, title: t('admissions.step3Title'), description: t('admissions.step3Desc') },
    { step: 4, title: t('admissions.step4Title'), description: t('admissions.step4Desc') },
  ];

  const requirements = [
    t('admissions.req1'),
    t('admissions.req2'),
    t('admissions.req3'),
    t('admissions.req4'),
  ];

  const subjects = [
      { icon: <CalculatorIcon className="w-6 h-6" />, name: t('academics.subjects.math'), color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
      { icon: <BeakerIcon className="w-6 h-6" />, name: t('academics.subjects.science'), color: "text-green-500 bg-green-50 dark:bg-green-900/20" },
      { icon: <BookOpenIcon className="w-6 h-6" />, name: t('academics.subjects.english'), color: "text-red-500 bg-red-50 dark:bg-red-900/20" },
      { icon: <GlobeIcon className="w-6 h-6" />, name: t('academics.subjects.social'), color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20" },
      { icon: <BookOpenIcon className="w-6 h-6" />, name: t('academics.subjects.nepali'), color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20" },
      { icon: <ClipboardListIcon className="w-6 h-6" />, name: t('academics.subjects.computer'), color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-brand-cream dark:bg-brand-charcoal min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy-light opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
             >
                <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-md mb-4 border border-white/20">
                     <GraduationCapIcon className="w-8 h-8 text-brand-gold" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-4">{t('academics.title')}</h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t('academics.subtitle')}</p>
             </motion.div>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
            <motion.div 
                className="grid md:grid-cols-2 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {/* Primary Level Card */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-brand-charcoal-light p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-6 text-brand-navy dark:text-brand-gold group-hover:scale-110 transition-transform">
                        <UserIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-serif text-brand-navy dark:text-white mb-3">{t('academics.levels.primaryTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('academics.levels.primaryDesc')}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'].map(g => (
                            <span key={g} className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs font-bold text-gray-500 dark:text-gray-400">{g}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Secondary Level Card */}
                <motion.div variants={itemVariants} className="bg-brand-navy text-white p-8 rounded-3xl shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold relative z-10 group-hover:scale-110 transition-transform">
                        <BookOpenIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-serif mb-3 relative z-10">{t('academics.levels.secondaryTitle')}</h3>
                    <p className="text-gray-300 leading-relaxed relative z-10">{t('academics.levels.secondaryDesc')}</p>
                    <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                        {['Grade 6', 'Grade 7', 'Grade 8'].map(g => (
                            <span key={g} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-gray-300">{g}</span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Curriculum / Subjects Grid */}
      <section className="py-20 px-6 bg-white dark:bg-brand-charcoal-light/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-serif text-brand-navy dark:text-white mb-4">{t('academics.subjects.title')}</h2>
                <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </div>

            <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {subjects.map((subject, idx) => (
                    <motion.div 
                        key={idx} 
                        variants={itemVariants}
                        className="p-6 rounded-2xl bg-gray-50 dark:bg-brand-charcoal-light border border-gray-100 dark:border-white/5 hover:shadow-md transition-all flex flex-col items-center text-center gap-4"
                    >
                        <div className={`p-3 rounded-full ${subject.color}`}>
                            {subject.icon}
                        </div>
                        <span className="font-bold text-brand-navy dark:text-gray-200">{subject.name}</span>
                    </motion.div>
                ))}
            </motion.div>
          </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-24 px-6 bg-brand-navy relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">{t('admissions.title')}</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mt-2">{t('admissions.subtitle')}</h2>
                </div>
                <Link to="/contact" className="bg-brand-gold text-brand-navy hover:bg-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-brand-gold/20">
                    {t('admissions.button')}
                </Link>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
                
                {/* Process Timeline */}
                <motion.div 
                    className="lg:col-span-7 space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {steps.map((item, index) => (
                        <motion.div key={item.step} variants={itemVariants} className="flex gap-6 group">
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-brand-navy-light border border-brand-gold/30 text-brand-gold font-bold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                                    {item.step}
                                </div>
                                {index !== steps.length - 1 && <div className="w-0.5 h-full bg-brand-gold/20 my-2"></div>}
                            </div>
                            <div className="pb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Requirements & Fees Box */}
                <motion.div 
                    className="lg:col-span-5 space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Requirements */}
                    <div className="bg-white dark:bg-brand-charcoal-light p-8 rounded-3xl shadow-xl">
                        <h3 className="text-xl font-bold font-serif text-brand-navy dark:text-white mb-6 flex items-center gap-3">
                            <ClipboardListIcon className="w-6 h-6 text-brand-gold" />
                            {t('admissions.requirementsTitle')}
                        </h3>
                        <ul className="space-y-4">
                            {requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                    <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fees */}
                    <div className="bg-brand-gold p-8 rounded-3xl shadow-xl text-brand-navy">
                        <h3 className="text-xl font-bold font-serif mb-4">{t('admissions.feesTitle')}</h3>
                        <p className="leading-relaxed font-medium opacity-90">
                            {t('admissions.feesDesc')}
                        </p>
                        <div className="mt-6 pt-6 border-t border-brand-navy/10 flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-navy/10 rounded-full flex items-center justify-center">
                                <span className="font-bold text-lg">FREE</span>
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider">Education for All</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Academics;
