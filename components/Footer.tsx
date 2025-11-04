
import React from 'react';
import { useLanguage } from './LanguageProvider';
import FacebookIcon from './icons/FacebookIcon';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-navy dark:bg-black text-gray-300 py-12 px-6 border-t border-white/10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        <div className="flex justify-center mt-4">
          <a 
            href="https://www.facebook.com/profile.php?id=100063644165542" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            className="text-gray-400 hover:text-brand-gold transition-colors duration-300"
          >
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;