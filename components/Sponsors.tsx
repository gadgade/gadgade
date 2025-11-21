import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, Variants } from "framer-motion";
import HandshakeIcon from "@/components/icons/HandshakeIcon";
import { Link } from "@/components/Router";

const Sponsors: React.FC = () => {
  const { t } = useLanguage();

  // Example placeholder sponsors - in a real app these would come from an API or config
  const sponsorLogos = [
    {
      name: "Google",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      url: "https://google.com",
      tier: "Gold"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-charcoal">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 px-6 overflow-hidden bg-brand-navy text-white">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-navy-light/50 to-transparent"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/10 shadow-lg"
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center"
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
              className="w-full max-w-[280px]"
              variants={itemVariants}
            >
              <div className="group aspect-[4/3] bg-white dark:bg-white/5 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="p-8 w-full h-full flex items-center justify-center relative z-10">
                    <img
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        loading="lazy"
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 transform group-hover:scale-110"
                    />
                  </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Empty state if no sponsors (or few) */}
        {sponsorLogos.length === 0 && (
             <div className="text-center py-20 opacity-50">
                <p>No sponsors yet. Be the first!</p>
             </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
            <div className="bg-brand-navy rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                 <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl"></div>
                 <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">{t("sponsors.becomeSponsorTitle")}</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t("sponsors.becomeSponsorText")}
                    </p>
                    <Link 
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        {t("sponsors.contactButton")}
                    </Link>
                 </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;