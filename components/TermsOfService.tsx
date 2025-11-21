import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-navy dark:text-white mb-6">
            {t('legal.termsOfService')}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm uppercase tracking-widest font-bold">
            {t('legal.lastUpdated')}: March 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Gadgade Basic School website (the "Service") operated by Gadgade Basic School ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">1. Intellectual Property</h3>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Gadgade Basic School and its licensors. The Service is protected by copyright, trademark, and other laws of Nepal and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Gadgade Basic School.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">2. Links To Other Web Sites</h3>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Gadgade Basic School.
            </p>
            <p>
              Gadgade Basic School has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Gadgade Basic School shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">3. Limitation of Liability</h3>
            <p>
              In no event shall Gadgade Basic School, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">4. Governing Law</h3>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">5. Changes</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mt-8 mb-4 font-serif">6. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:admin@gadgadeschool.edu.np" className="text-brand-gold hover:underline">admin@gadgadeschool.edu.np</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;