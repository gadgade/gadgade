
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Academics />
        <Faculty />
        <Gallery />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;