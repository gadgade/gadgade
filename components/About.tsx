import React from "react";
import { useLanguage } from "./LanguageProvider";
// FIX: Import Variants type from framer-motion
import { motion, Variants } from "framer-motion";
import InfoIcon from "./icons/InfoIcon";
import TargetIcon from "./icons/TargetIcon";
import EyeIcon from "./icons/EyeIcon";

// FIX: Explicitly type variants with Variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About: React.FC = () => {
  const { t } = useLanguage();

  // FIX: Explicitly type variants with Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // FIX: Explicitly type variants with Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  // FIX: Explicitly type variants with Variants
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="about"
      className="py-24 px-8 bg-white dark:bg-brand-charcoal-light overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-4 flex items-center justify-center gap-4">
            <InfoIcon className="w-10 h-10 text-brand-gold flex-shrink-0" />
            <span>{t("about.title")}</span>
          </h2>
        </div>

        <motion.div
          className="bg-brand-cream dark:bg-brand-charcoal p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 dark:border-white/10"
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <img
                src="https://res.cloudinary.com/dph6mqggr/image/upload/v1762218893/banner_cj0zgv.jpg"
                alt="Gadgade Basic School classroom"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div variants={imageVariants}>
              <p className="text-lg text-text-medium dark:text-text-light mb-4 text-left md:text-justify">
                {t("about.p1")}
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-3 flex items-center gap-3">
                  <TargetIcon className="w-8 h-8 text-brand-gold flex-shrink-0" />
                  <span>{t("about.missionTitle")}</span>
                </h3>
                <p className="text-text-medium dark:text-gray-300 mb-4 text-left md:text-justify">
                  {t("about.missionText")}
                </p>
                <h3 className="text-2xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-3 flex items-center gap-3">
                  <EyeIcon className="w-8 h-8 text-brand-gold flex-shrink-0" />
                  <span>{t("about.visionTitle")}</span>
                </h3>
                <p className="text-text-medium dark:text-gray-300 text-left md:text-justify">
                  {t("about.visionText")}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
