
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "@/components/Router";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import SchoolLogo from "@/components/icons/SchoolLogo";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Check if we are on the home page
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    { name: t("header.home"), path: "/" },
    { name: t("header.about"), path: "/about" },
    { name: t("header.academics"), path: "/academics" },
    { name: t("header.faculty"), path: "/faculty" },
    { name: t("header.gallery"), path: "/gallery" },
    { name: t("header.sponsors"), path: "/sponsors" },
    { name: t("header.contact"), path: "/contact" },
  ];

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  const mobileNavContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  };

  const mobileNavLinkVariants: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  // Determine header style: Solid if scrolled OR if not on home page
  const isSolidHeader = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isSolidHeader
            ? "py-2 bg-brand-navy/95 dark:bg-brand-charcoal/95 backdrop-blur-xl border-white/10 shadow-lg"
            : "py-4 bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white rounded-full p-1 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <SchoolLogo className="w-10 h-10 lg:w-12 lg:h-12 text-brand-navy" />
            </div>
            <div className="flex flex-col">
                <span className={`text-lg lg:text-xl font-bold font-serif tracking-tight whitespace-nowrap leading-tight ${isSolidHeader ? "text-white" : "text-white drop-shadow-md"}`}>
                {t("header.schoolName")}
                </span>
                <span className={`text-xs font-sans tracking-widest uppercase opacity-80 ${isSolidHeader ? "text-gray-300" : "text-gray-200 drop-shadow-sm"}`}>
                    Est. 1993 / 2050 BS
                </span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-black/20 backdrop-blur-md border border-white/10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-brand-navy font-bold" : "text-white hover:text-brand-gold"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-brand-gold rounded-full shadow-sm"
                      layoutId="active-pill"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-colors ${isSolidHeader ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm"}`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MoonIcon className="w-5 h-5" />
              ) : (
                <SunIcon className="w-5 h-5" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`font-bold py-2 px-4 rounded-full transition-all duration-300 text-sm border ${isSolidHeader ? "bg-white text-brand-navy border-white hover:bg-gray-100" : "bg-transparent text-white border-white hover:bg-white hover:text-brand-navy backdrop-blur-sm"}`}
            >
              {t("header.languageToggle")}
            </motion.button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
             <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="focus:outline-none p-2 rounded-lg bg-white/10 backdrop-blur-md text-white border border-white/10"
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
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[100] flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
             <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
             
            <motion.div 
                className="w-[80%] max-w-sm bg-brand-navy dark:bg-brand-charcoal h-full shadow-2xl relative flex flex-col"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="p-6 flex justify-between items-center border-b border-white/10">
                    <span className="text-xl font-serif font-bold text-white">{t("header.schoolName")}</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="focus:outline-none p-2 rounded-full hover:bg-white/10 text-white"
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
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                        </svg>
                    </button>
                </div>

                <motion.nav
                className="flex-grow px-6 py-8 overflow-y-auto"
                variants={mobileNavContainerVariants}
                initial="hidden"
                animate="visible"
                >
                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                            <motion.li key={link.name} variants={mobileNavLinkVariants}>
                                <Link
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block text-2xl font-serif transition-colors duration-300 ${location.pathname === link.path ? "text-brand-gold" : "text-white hover:text-brand-gold/70"}`}
                                >
                                {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>

                <div className="p-6 border-t border-white/10 bg-brand-navy-light/30">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors"
                        >
                            {theme === "light" ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                            <span className="text-sm font-medium">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                        </button>
                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 rounded-lg bg-brand-gold text-brand-navy font-bold text-sm"
                        >
                            {t("header.languageToggle")}
                        </button>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
