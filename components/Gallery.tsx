import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";
// FIX: Import Variants type from framer-motion
import { motion, AnimatePresence, Variants } from "framer-motion";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import ImageIcon from "./icons/ImageIcon";

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/dph6mqggr/image/upload/v1762218894/principal-seat-002_qpnewf.jpg",
    "https://res.cloudinary.com/dph6mqggr/image/upload/v1762218894/students-001_vnszuv.jpg",
    "https://res.cloudinary.com/dph6mqggr/image/upload/v1762218893/teacher-board-001_tyjqah.jpg",
    "https://res.cloudinary.com/dph6mqggr/image/upload/v1762218896/children-room-001_agh6as.jpg",
    "https://res.cloudinary.com/dph6mqggr/image/upload/v1762218894/children-room-002_slosto.jpg",
    "https://res.cloudinary.com/dph6mqggr/image/upload/v1762218896/building-001_jjvltm.jpg",
    "https://res.cloudinary.com/dph6mqggr/image/upload/v1762218895/building-002_exmf3u.jpg",
    "https://res.cloudinary.com/dph6mqggr/image/upload/v1762218897/france-001_b0cfkk.jpg",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // FIX: Explicitly type variants with Variants
  const slideVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  // FIX: Explicitly type variants with Variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="gallery"
      className="py-24 px-8 bg-brand-cream dark:bg-brand-charcoal overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-4 flex items-center justify-center gap-4">
            <ImageIcon className="w-10 h-10 text-brand-gold flex-shrink-0" />
            <span>{t("gallery.title")}</span>
          </h2>
          <p className="text-lg text-text-medium dark:text-gray-300 max-w-3xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </div>

        <div className="bg-white dark:bg-brand-charcoal-light p-4 sm:p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-white/10 max-w-5xl mx-auto">
          <div className="relative">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-inner">
              <AnimatePresence>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={slideVariants}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                  }}
                  className="absolute w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-3 md:left-5 transform -translate-y-1/2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-700/80 text-brand-navy dark:text-white p-3 rounded-full shadow-md z-10 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 md:right-5 transform -translate-y-1/2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-700/80 text-brand-navy dark:text-white p-3 rounded-full shadow-md z-10 transition-colors"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-sm p-2 rounded-full">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index
                      ? "bg-brand-gold"
                      : "bg-white/50 hover:bg-white/70"
                  } transition-colors`}
                  aria-label={`Go to image ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
