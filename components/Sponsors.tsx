
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, Variants } from "framer-motion";
import HandshakeIcon from "@/components/icons/HandshakeIcon";

const Sponsors: React.FC = () => {
  const { t } = useLanguage();

  const sponsorLogos = [
    {
      name: "Google",
      logoUrl: "https://logo.clearbit.com/google.com",
      url: "https://google.com",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-charcoal">
        {/* Hero Section */}
        <section className="relativeyb py-24 lg:py-32 px-6 overflow-hidden bg-brand-navyQl text-white">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/10"
                >
                    <HandshakeIcon className="w-8 h-8 text-brand-gold" />
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight"
                >
                    {t("sponsors.title")}
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto"
                >
                    {t("sponsors.subtitle")}
                </motion.p>
            </div>
        </section>

      <div className="container mx-auto px-6 py-20">
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          {sponsorLogos.map((sponsor) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all duration-500 group w-full max-w-[250px]"
              variants={itemVariants}
            >
              <div className="aspect-square p-8 bg-white dark:bg-white/5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5VX transform group-hover:-translate-y-2 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    loading="lazy"
                    className="h-12 md:h-16 w-auto object-contain relative z-10"
                  />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
