
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, Variants } from "framer-motion";
import TargetIcon from "@/components/icons/TargetIcon";
import EyeIcon from "@/components/icons/EyeIcon";
import UsersIcon from "@/components/icons/UsersIcon";
import BookOpenIcon from "@/components/icons/BookOpenIcon";
import QuoteIcon from "@/components/icons/QuoteIcon";
import HandshakeIcon from "@/components/icons/HandshakeIcon";
import InfoIcon from "@/components/icons/InfoIcon";
import GraduationCapIcon from "@/components/icons/GraduationCapIcon";

const About: React.FC = () => {
  const { t } = useLanguage();

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const values = [
    { icon: <GraduationCapIcon className="w-8 h-8" />, title: t("about.values.v1"), color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { icon: <UsersIcon className="w-8 h-8" />, title: t("about.values.v2"), color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
    { icon: <HandshakeIcon className="w-8 h-8" />, title: t("about.values.v3"), color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
    { icon: <TargetIcon className="w-8 h-8" />, title: t("about.values.v4"), color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-charcoal">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src="https://res.cloudinary.com/dph6mqggr/image/upload/v1762218895/building-002_exmf3u.jpg" 
                alt="Gadgade School Building" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-sm">
                    Est. 1993 / 2050 BS
                </span>
                <h1 className="text-5xl md:text-7xl font-black font-serif text-white mb-6 drop-shadow-lg">
                    {t("about.title")}
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
                    {t("about.subtitle")}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Introduction & History Section */}
      <motion.section 
        className="py-20 px-6 bg-white dark:bg-brand-charcoal-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Content */}
                <motion.div variants={staggerContainer} className="space-y-8">
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-4">
                            Who We Are
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                            {t("about.p1")}
                        </p>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp} className="border-l-4 border-brand-gold pl-6 py-2">
                        <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-white mb-3">
                            {t("about.historyTitle")}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                            {t("about.historyText")}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right Image Collage */}
                <motion.div variants={fadeInUp} className="relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://res.cloudinary.com/dph6mqggr/image/upload/v1762218894/students-001_vnszuv.jpg" 
                            alt="Students in assembly" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-navy/10 dark:border-white/10 rounded-2xl -z-0"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl -z-0"></div>
                </motion.div>
            </div>
        </div>
      </motion.section>

      {/* Mission & Vision Cards */}
      <section className="py-20 px-6 bg-brand-cream dark:bg-brand-charcoal relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

         <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-brand-navy text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                        <TargetIcon className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                            <TargetIcon className="w-8 h-8 text-brand-gold" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-4">{t("about.missionTitle")}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {t("about.missionText")}
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white dark:bg-brand-charcoal-light p-10 rounded-[2rem] shadow-xl border border-gray-100 dark:border-white/5 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 text-brand-gold opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                        <EyeIcon className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                         <div className="w-14 h-14 bg-brand-navy/5 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                            <EyeIcon className="w-8 h-8 text-brand-navy dark:text-brand-gold" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-brand-navy dark:text-white mb-4">{t("about.visionTitle")}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            {t("about.visionText")}
                        </p>
                    </div>
                </motion.div>
            </div>
         </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white dark:bg-brand-charcoal-light">
        <div className="container mx-auto max-w-6xl text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Our Culture</span>
                <h2 className="text-4xl font-bold font-serif text-brand-navy dark:text-white mt-2">{t("about.values.title")}</h2>
                <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {values.map((value, idx) => (
                    <motion.div 
                        key={idx} 
                        variants={fadeInUp}
                        className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-white/5"
                    >
                        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 ${value.color}`}>
                            {value.icon}
                        </div>
                        <h3 className="text-xl font-bold font-serif text-brand-navy dark:text-white">{value.title}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-24 px-6 bg-brand-navy relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy-light/30 skew-x-12 transform origin-top-right"></div>
         
         <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-brand-cream dark:bg-brand-charcoal rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-white/10">
                            <img 
                                src="https://res.cloudinary.com/dph6mqggr/image/upload/v1763740110/principal_gv9xzb.jpg" 
                                alt="Principal" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-navy p-4 rounded-xl shadow-lg hidden md:block">
                            <p className="font-bold font-serif text-sm">Mr. Purna Tamang</p>
                            <p className="text-xs uppercase tracking-wider opacity-80">Principal</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-2/3">
                    <div className="text-brand-gold mb-6 opacity-50">
                        <QuoteIcon className="w-16 h-16" />
                    </div>
                    <h2 className="text-3xl font-bold font-serif text-brand-navy dark:text-white mb-6">
                        {t("about.principalMessageTitle")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic mb-8">
                        "{t("about.principalMessageBody")}"
                    </p>
                    
                    <div className="md:hidden mt-4 border-t border-gray-200 dark:border-white/10 pt-4">
                        <p className="font-bold font-serif text-brand-navy dark:text-brand-gold">Mr. Purna Tamang</p>
                        <p className="text-sm text-gray-500">Principal, Gadgade Basic School</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold text-brand-navy dark:text-brand-gold mt-4">
                        <span>Sign:</span>
                        <span className="font-serif text-2xl italic">Purna T.</span>
                    </div>
                </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default About;
