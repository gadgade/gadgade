
import React from 'react';
import { useLocation } from '@/components/Router';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Academics from '@/components/Academics';
import Faculty from '@/components/Faculty';
import Gallery from '@/components/Gallery';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
    case '/':
    default:
      content = (
        <>
          <Hero />
        </>
      );
      break;
  }

  return (
    <>
      <Header />
      <main>
        {content}
      </main>
      <Footer />
    </>
  );
};

export default App;
