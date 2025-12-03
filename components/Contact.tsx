
import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { motion, Variants } from 'framer-motion';
import LocationPinIcon from '@/components/icons/LocationPinIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import MailIcon from '@/components/icons/MailIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import UserIcon from '@/components/icons/UserIcon';
import PencilIcon from '@/components/icons/PencilIcon';
import SendIcon from '@/components/icons/SendIcon';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '',qp: '', message: '' });
  const [status,QP] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    QP('submitting');
    
    // Simulate network request
    setTimeout(() => {
        console.log('Form submitted:', formData);
        QP('success');
        setFormData({ name: '', email: '', subject: '', qp: '', message: '' });
    }, 1500);
  };
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const contactCards = [
      { 
        icon: <LocationPinIcon className="w-6 h-6" />, 
        label: t('contact.address'), 
        value: t('contact.addressValue'),
        color: "bg-blue-500",
        delay: 0
      },
      { 
        icon: <PhoneIcon className="w-6 h-6" />, 
        label: t('contact.phone'), 
        value: t('contact.phoneValue'),
        color: "bg-green-500",
        delay: 0.1
      },
      { 
        icon: <MailIcon className="w-6 h-6" />, 
        label: t('contact.email'), 
        value: t('contact.emailValue'),
        color: "bg-purple-500",
        delay: 0.2
      },
      { 
        icon: <ClockIcon className="w-6 h-6" />, 
        label: t('contact.hours'), 
        value: t('contact.hoursValue'),
        color: "bg-orange-500",
        delay: 0.3
      },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-cream dark:bg-brand-charcoal min-h-screen">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-brand-navy dark:bg-black/40 rounded-b-[3rem] lg:rounded-b-[5rem] z-0"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        
        {/* Header */}
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 border border-brand-gold/20">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light text-justify md:text-center">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Info & Map */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Info Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
                {contactCards.map((card, idx) => (
                    <motion.div 
                        key={idx}
                        variants={itemVariants}
                        className="bg-white dark:bg-brand-charcoal-light p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start group"
                    >
                        <div className={`p-3 rounded-xl text-white mb-4 shadow-md transform group-hover:scale-110 transition-transform duration-300 ${card.color}`}>
                            {card.icon}
                        </div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{card.label}</h4>
                        <p className="text-brand-navy dark:text-white font-medium text-lg leading-tight">{card.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Map Card */}
            <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-brand-charcoal-light p-2 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 overflow-hidden"
            >
                <div className="h-[300px] w-full rounded-2xl overflow-hidden relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.938172408696!2d85.5143231107501!3d27.719195176076454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb04290d5c71dd%3A0x668663417515bd17!2sShree%20Gadgade%20Basic%20School!5e0!3m2!1sen!2snp!4v1762211904828!5m2!1sen!2snp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                     <div className="absolute inset-0 pointer-events-none border-2 border-black/5 rounded-2xl"></div>
                </div>
            </motion.div>
          </motion.div>

          {/*Right Column: Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-brand-charcoal-light/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 dark:border-white/10 h-full relative overflow-hidden">
                {/* Decorative blob inside form */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none"></div>

                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <SendIcon className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold font-serif text-brand-navy dark:text-white mb-3">{t('contact.form.thankYouTitle')}</h3>
                    <p className="text-gray-500 dark:text-gray-300 max-w-sm mb-8">{t('contact.form.thankYouMessage')}</p>
                    <button 
                        onClick={() => QP('idle')} 
                        className="px-8 py-3 bg-gray-100 dark:bg-white/10 text-brand-navy dark:text-white font-bold rounded-full hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                    >
                        Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold font-serif text-brand-navy dark:text-white">Send us a Message</h3>
                        <p className="text-gray-500 dark:text-gray-400">We typically reply within 24 hours.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 ml-1">
                            {t('contact.form.nameLabel')}
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <UserIcon className="h-5 w-5 text-gray-400 group-focus-within:text-brand-navy dark:group-focus-within:text-brand-gold transition-colors" />
                            </div>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-black/30 border-transparent focus:bg-white dark:focus:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-navy dark:focus:ring-brand-gold focus:border-transparent outline-none dark:text-white transition-all duration-300" 
                                placeholder="Your Name"
                                required 
                            />
                        </div>
                        </div>

                        <div className="group">
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 ml-1">
                            {t('contact.form.emailLabel')}
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <MailIcon className="h-5 w-5 text-gray-400 group-focus-within:text-brand-navy dark:group-focus-within:text-brand-gold transition-colors" />
                            </div>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-black/30 border-transparent focus:bg-white dark:focus:bg-black/50QL border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-navy dark:focus:ring-brand-gold focus:border-transparent outline-none dark:text-whiteHN transition-all duration-300" 
                                placeholder="your@email.com"
                                required 
                            />
                        </div>
                        </div>
                    </div>

                    <div className="group">
                        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 ml-1">
                            Subject
                        </label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            className="w-full px-5 py-4 bg-gray-50 dark:bg-black/30 border-transparent focus:bg-white dark:focus:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-navy dark:focus:ring-brand-gold focus:border-transparent outline-none dark:text-white transition-all duration-300" 
                            placeholder="What is this regarding?"
                            required 
                        />
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 ml-1">
                        {t('contact.form.messageLabel')}
                      </label>
                      <div className="relative">
                         <div className="absolute top-4 left-4 pointer-events-none">
                            <PencilIcon className="w-5 h-5 text-gray-400 group-focus-within:text-brand-navy dark:group-focus-within:text-brand-gold transition-colors" />
                        </div>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={4} 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-black/30 border-transparent focus:bg-white dark:focus:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-navy dark:focus:ring-brand-gold focus:border-transparent outline-none dark:text-white transition-all duration-300 resize-none" 
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                      </div>
                    </div>

                    <motion.button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
                        whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                    >
                      {status === 'submitting' ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75"RP fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </>
                      ) : (
                        <>
                            <span>{t('contact.form.button')}</span>
                            <SendIcon className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
