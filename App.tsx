import React, { Suspense, lazy } from 'react';
import { useLocation } from '@/components/Router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

// Lazy load page components to split the bundle
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Academics = lazy(() => import('@/components/Academics'));
const Faculty = lazy(() => import('@/components/Faculty'));
const Gallery = lazy(() => import('@/components/Gallery'));
const Sponsors = lazy(() => import('@/components/Sponsors'));
const Contact = lazy(() => import('@/components/Contact'));
const PrivacyPolicy = lazy(() => import('@/components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/components/TermsOfService'));

// Simple loading spinner component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-cream dark:bg-brand-charcoal">
    <div className="w-12 h-12 border-4 border-brand-navy/20 dark:border-white/20 border-t-brand-gold rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const { pathname } = useLocation();

  let content;
  switch (pathname) {
    case '/about':
      content = <About />;
      break;
    case '/academics':
      content = <Academics />;
      break;
    case '/faculty':
      content = <Faculty />;
      break;
    case '/gallery':
      content = <Gallery />;
      break;
    case '/sponsors':
      content = <Sponsors />;
      break;
    case '/contact':
      content = <Contact />;
      break;
    case '/privacy-policy':
      content = <PrivacyPolicy />;
      break;
    case '/terms-of-service':
      content = <TermsOfService />;
      break;
    case '/':
    default:
      content = <Hero />;
      break;
  }

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          {content}
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default App;