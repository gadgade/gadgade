
import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-charcoal pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-brand-charcoal-light p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-white/5"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-white mb-6 text-center">
            {t('legal.privacyPolicy')}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm uppercase tracking-widest font-bold text-center">
            {t('legal.lastUpdated')}: March 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            <p>
              At Gadgade Basic School ("we," "us," or "our"), we are committed to protecting the privacy and security of our students, parents, staff, and website visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our school services.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">1. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Personal Information:</strong> Names, email addresses, phone numbers, and other contact details provided voluntarily through our contact forms or admission inquiries.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, device information, and pages visited, collected via cookies and analytics tools (e.g., Google Analytics).</li>
            </ul>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">2. How We Use Your Information</h3>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>To process admission inquiries and respond to contact requests.</li>
              <li>To improve our website functionality and user experience.</li>
              <li>To communicate important school updates, events, and news.</li>
              <li>To analyze website traffic and usage patterns to better serve our community.</li>
            </ul>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">3. Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
            <p className="mt-2">
              We utilize tools such as Google Analytics and Google Tag Manager to understand website traffic. These third-party services may collect information sent by your browser as part of a web page request, including cookies and your IP address.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">4. Data Security</h3>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none mt-4 space-y-1">
              <li>By email: <a href="mailto:admin@gadgadeschool.edu.np" className="text-brand-gold hover:underline">admin@gadgadeschool.edu.np</a></li>
              <li>By phone: 01-6680145</li>
              <li>By mail: Changunarayan-6, Nagarkot, Bhaktapur, Nepal</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
