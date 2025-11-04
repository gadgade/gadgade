
import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { motion, Variants } from 'framer-motion';
import LocationPinIcon from './icons/LocationPinIcon';
import PhoneIcon from './icons/PhoneIcon';
import MailIcon from './icons/MailIcon';
import ClockIcon from './icons/ClockIcon';
import UserIcon from './icons/UserIcon';
import PencilIcon from './icons/PencilIcon';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };
  
  // FIX: Explicitly type variants with Variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  const leftVariant: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightVariant: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const contactInfo = [
      { icon: <LocationPinIcon className="w-6 h-6 mt-1 text-brand-gold flex-shrink-0" />, label: t('contact.address'), value: t('contact.addressValue') },
      { icon: <PhoneIcon className="w-6 h-6 mt-1 text-brand-gold flex-shrink-0" />, label: t('contact.phone'), value: t('contact.phoneValue') },
      { icon: <MailIcon className="w-6 h-6 mt-1 text-brand-gold flex-shrink-0" />, label: t('contact.email'), value: t('contact.emailValue') },
      { icon: <ClockIcon className="w-6 h-6 mt-1 text-brand-gold flex-shrink-0" />, label: t('contact.hours'), value: t('contact.hoursValue') },
  ];

  return (
    <motion.section 
        id="contact" 
        className="py-24 px-8 bg-brand-cream dark:bg-brand-charcoal overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-4 flex items-center justify-center gap-4">
            <MailIcon className="w-10 h-10 text-brand-gold flex-shrink-0" />
            <span>{t('contact.title')}</span>
          </h2>
          <p className="text-lg text-text-medium dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-brand-charcoal-light p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-white/10"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold font-serif text-brand-navy dark:text-brand-gold mb-8">{t('contact.infoTitle')}</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h4 className="font-bold text-lg text-text-dark dark:text-text-light">{item.label}</h4>
                    <p className="text-text-medium dark:text-gray-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-brand-charcoal-light p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-white/10"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {submitted ? (
              <div className="text-center p-8 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-2xl h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold font-serif">{t('contact.form.thankYouTitle')}</h3>
                <p>{t('contact.form.thankYouMessage')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-lg font-semibold text-text-dark dark:text-text-light mb-2 gap-2">
                    <UserIcon className="w-5 h-5 text-gray-400" />
                    <span>{t('contact.form.nameLabel')}</span>
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-brand-charcoal border border-gray-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-gold/70 focus:border-brand-gold focus:outline-none dark:text-white transition-all" required />
                </div>
                <div>
                  <label htmlFor="email" className="flex items-center text-lg font-semibold text-text-dark dark:text-text-light mb-2 gap-2">
                    <MailIcon className="w-5 h-5 text-gray-400" />
                    <span>{t('contact.form.emailLabel')}</span>
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-brand-charcoal border border-gray-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-gold/70 focus:border-brand-gold focus:outline-none dark:text-white transition-all" required />
                </div>
                <div>
                  <label htmlFor="message" className="flex items-center text-lg font-semibold text-text-dark dark:text-text-light mb-2 gap-2">
                    <PencilIcon className="w-5 h-5 text-gray-400" />
                    <span>{t('contact.form.messageLabel')}</span>
                  </label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-brand-charcoal border border-gray-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-gold/70 focus:border-brand-gold focus:outline-none dark:text-white transition-all" required></textarea>
                </div>
                <motion.button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-light hover:opacity-90 text-brand-navy font-bold py-3 px-6 rounded-xl transition-opacity duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                  {t('contact.form.button')}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;