import React from "react";
import { useLanguage } from "./LanguageProvider";
// FIX: Import Variants type from framer-motion
import { motion, Variants } from "framer-motion";
import HandshakeIcon from "./icons/HandshakeIcon";

const Sponsors: React.FC = () => {
  const { t } = useLanguage();

  const sponsorLogos = [
    {
      name: "Google",
      logoUrl: "https://logo.clearbit.com/google.com",
      url: "https://google.com",
    },
  ];

  // FIX: Explicitly type variants with Variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // FIX: Explicitly type variants with Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // FIX: Explicitly type variants with Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="sponsors"
      className="py-24 px-8 bg-white dark:bg-brand-charcoal-light overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-4 flex items-center justify-center gap-4">
            <HandshakeIcon className="w-12 h-12 text-brand-gold flex-shrink-0" />
            <span>{t("sponsors.title")}</span>
          </h2>
          <p className="text-lg text-text-medium dark:text-gray-300 max-w-3xl mx-auto">
            {t("sponsors.subtitle")}
          </p>
        </div>
        <motion.div
          className="bg-brand-cream dark:bg-brand-charcoal p-12 md:p-16 rounded-3xl shadow-xl border border-gray-200 dark:border-white/10"
          variants={containerVariants}
        >
          <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8">
            {sponsorLogos.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                variants={itemVariants}
                className="flex justify-center"
              >
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    className="h-12 md:h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:invert dark:opacity-70 dark:hover:opacity-100"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
