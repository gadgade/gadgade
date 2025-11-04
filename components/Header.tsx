import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
// FIX: Import Variants type from framer-motion to resolve type errors.
import { motion, AnimatePresence, Variants } from "framer-motion";

const SchoolLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="256"
      cy="256"
      r="240"
      stroke="currentColor"
      strokeWidth="16"
      fill="none"
    />
    <path
      id="curve"
      d="M129.5,431.5 A200,200 0 0,1 129.5,80.5"
      fill="none"
      stroke="none"
    />
    <text fontSize="54" fontWeight="bold">
      <textPath href="#curve" startOffset="50%" textAnchor="middle">
        श्री गडगडे आधारभूत विद्यालय
      </textPath>
    </text>
    <path
      d="M129.5,431.5 A200,200 0 0,0 382.5,431.5"
      fill="none"
      id="curve-bottom"
    />
    <text fontSize="54" fontWeight="bold">
      <textPath href="#curve-bottom" startOffset="50%" textAnchor="middle">
        चाँगुनारायण न.पा. - ६
      </textPath>
    </text>
    <path
      d="M256 150 L160 310 L352 310 Z"
      stroke="currentColor"
      strokeWidth="12"
      fill="none"
    />
    <path
      d="M256 340 L160 180 L352 180 Z"
      stroke="currentColor"
      strokeWidth="12"
      fill="none"
    />
    <path
      d="M190 285 L210 280 L225 288 L240 282 L256 290 L270 284 L285 290 L300 282 L322 285"
      stroke="currentColor"
      strokeWidth="8"
      fill="none"
    />
    <path d="M220 250 V280" stroke="currentColor" strokeWidth="8" fill="none" />
    <path d="M240 250 V280" stroke="currentColor" strokeWidth="8" fill="none" />
    <path d="M272 250 V280" stroke="currentColor" strokeWidth="8" fill="none" />
    <path d="M292 250 V280" stroke="currentColor" strokeWidth="8" fill="none" />
    <path d="M210 250 H302" stroke="currentColor" strokeWidth="8" fill="none" />
    <path d="M115,370 L130,380 L145,370 L135,355 Z" />
    <path d="M397,370 L382,380 L367,370 L377,355 Z" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: t("header.home"), href: "#home" },
    { name: t("header.about"), href: "#about" },
    { name: t("header.academics"), href: "#academics" },
    { name: t("header.faculty"), href: "#faculty" },
    { name: t("header.gallery"), href: "#gallery" },
    { name: t("header.sponsors"), href: "#sponsors" },
    { name: t("header.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    document.querySelectorAll("main section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // FIX: Explicitly type variants with Variants to satisfy TypeScript.
  const mobileMenuVariants: Variants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // FIX: Explicitly type variants with Variants to satisfy TypeScript.
  const mobileNavContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
  };

  // FIX: Explicitly type variants with Variants to satisfy TypeScript.
  const mobileNavLinkVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${
          scrolled
            ? "py-3 bg-brand-navy/90 dark:bg-brand-charcoal-light/90 backdrop-blur-lg shadow-xl"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <SchoolLogo className="w-10 h-10 lg:w-12 lg:h-12" />
            <span className="text-lg lg:text-xl font-bold font-serif tracking-tight bg-brand-gold text-brand-navy rounded-full px-4 py-1 whitespace-nowrap">
              {t("header.schoolName")}
            </span>
          </a>
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`text-lg px-4 py-2 font-medium rounded-md relative transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 dark:bg-white/10 rounded-lg -z-10"
                      layoutId="active-pill"
                    />
                  )}
                  {link.name}
                </motion.a>
              );
            })}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MoonIcon className="w-6 h-6" />
              ) : (
                <SunIcon className="w-6 h-6" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="bg-brand-gold text-brand-navy font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-300 ml-2"
            >
              {t("header.languageToggle")}
            </motion.button>
          </nav>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="focus:outline-none p-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-brand-navy/95 dark:bg-brand-charcoal/95 backdrop-blur-lg z-[100] flex flex-col p-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-full flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="focus:outline-none p-1"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <motion.nav
              className="flex-grow flex flex-col items-center justify-center space-y-6"
              variants={mobileNavContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif text-white hover:text-brand-gold transition-colors duration-300"
                  variants={mobileNavLinkVariants}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>

            <motion.div
              className="flex items-center justify-center gap-6"
              variants={mobileNavContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                variants={mobileNavLinkVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <MoonIcon className="w-7 h-7 text-white" />
                ) : (
                  <SunIcon className="w-7 h-7 text-white" />
                )}
              </motion.button>
              <motion.button
                variants={mobileNavLinkVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="bg-brand-gold text-brand-navy font-bold py-3 px-5 rounded-md hover:opacity-90 transition-opacity duration-300"
              >
                {t("header.languageToggle")}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
