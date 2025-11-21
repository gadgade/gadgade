
import React from 'react';
import { Link } from '@/components/Router';
import { useLanguage } from '@/components/LanguageProvider';
import FacebookIcon from '@/components/icons/FacebookIcon';
import SchoolLogo from '@/components/icons/SchoolLogo';
import LocationPinIcon from '@/components/icons/LocationPinIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import MailIcon from '@/components/icons/MailIcon';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Academics', path: '/academics' },
      { name: 'Faculty', path: '/faculty' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Sponsors', path: '/sponsors' },
      { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-[#051B30] text-white relative overflow-hidden border-t border-brand-gold/30">
      {/* Background Spotlight & Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-navy-light/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 text-white/[0.03] pointer-events-none">
         <SchoolLogo className="w-[500px] h-[500px]" />
      </div>

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: School Brand (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
                <div className="bg-white p-1.5 rounded-full shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <SchoolLogo className="w-14 h-14 text-brand-navy" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-serif leading-none tracking-tight text-white group-hover:text-brand-gold transition-colors">
                        {t('header.schoolName')}
                    </h3>
                    <span className="text-xs text-gray-400 uppercase tracking-[0.2em]">Est. 1993 / 2050 BS</span>
                </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md text-lg font-light">
               Empowering the future of Nagarkot through quality, accessible basic education. We nurture minds, build character, and foster a community of lifelong learners.
            </p>
            <div className="flex gap-4 pt-4">
               <a 
                href="https://www.facebook.com/profile.php?id=100063644165542" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-600 hover:text-white text-gray-300 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-sm font-bold text-brand-gold mb-8 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group w-fit"
                  >
                    <ChevronRightIcon className="w-4 h-4 text-brand-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-brand-gold mb-8 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300 shrink-0">
                    <LocationPinIcon className="w-5 h-5" />
                </div>
                <span className="font-light">{t('contact.addressValue')}</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300 shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                </div>
                <a href={`tel:${t('contact.phoneValue')}`} className="font-light hover:text-white transition-colors border-b border-transparent hover:border-white/50">
                    {t('contact.phoneValue')}
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-300 group">
                 <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300 shrink-0">
                    <MailIcon className="w-5 h-5" />
                </div>
                <a href={`mailto:${t('contact.emailValue')}`} className="font-light hover:text-whiteTZ transition-colors border-b border-transparent hover:border-white/50">
                    {t('contact.emailValue')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} <span className="text-gray-300">{t('header.schoolName')}</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
             <Link to="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
             <Link to="#" className="hover:text-brand-goldyb transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
