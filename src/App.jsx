import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './components/Home'; 
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Certificate from './components/Certificate';
import Project from './components/Project'; // Tambahkan import untuk Project
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white text-gray-900 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <main>
          <Home /> 
          <About />
          <Skills />
          <Services />
          <Certificate />
          <Project /> {/* Tambahkan komponen Project di sini */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
