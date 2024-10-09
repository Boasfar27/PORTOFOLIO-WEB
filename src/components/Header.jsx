import React, { useState, useEffect } from 'react';
import { BsSun, BsMoonStars, BsLaptop, BsList, BsX } from 'react-icons/bs';

function Header() {
  const [theme, setTheme] = useState('system'); // Default mode adalah system
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk menu mobile

  useEffect(() => {
    // Menerapkan mode tema berdasarkan state
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#ffffff';
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#1a202c'; // Background hitam untuk dark mode
    } else {
      // Menyesuaikan dengan preferensi sistem pengguna
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md fixed w-full z-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
      >
        My Portfolio
      </h1>
      
      {/* Icon Hamburger untuk mobile */}
      <div className="md:hidden flex items-center">
        <div className="cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <BsX className="text-2xl text-gray-900 dark:text-white" />
          ) : (
            <BsList className="text-2xl text-gray-900 dark:text-white" />
          )}
        </div>
      </div>

      {/* Menu navigasi desktop */}
      <nav className="hidden md:flex space-x-4 items-center">
        <a href="#home" className="font-semibold text-gray-900 transition-colors duration-300 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">Home</a>
        <a href="#about" className="font-semibold text-gray-900 transition-colors duration-300 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">About</a>
        <a href="#skills" className="font-semibold text-gray-900 transition-colors duration-300 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">Skills</a>
        <a href="#services" className="font-semibold text-gray-900 transition-colors duration-300 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">Services</a>
        <a href="#portfolio" className="font-semibold text-gray-900 transition-colors duration-300 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">Portfolio</a>
        <a href="#contact" className="font-semibold text-gray-900 transition-colors duration-300 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">Contact</a>

        {/* Icon untuk theme switch */}
        <div className="ml-4 cursor-pointer" onClick={handleThemeSwitch}>
          {theme === 'light' && <BsSun className="text-yellow-500 hover:text-purple-600 transition-colors duration-300" size={24} />}
          {theme === 'dark' && <BsMoonStars className="text-blue-500 hover:text-purple-600 transition-colors duration-300" size={24} />}
          {theme === 'system' && <BsLaptop className="text-green-500 hover:text-purple-600 transition-colors duration-300" size={24} />}
        </div>
      </nav>

      {/* Menu navigasi mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-xs p-4 flex flex-col space-y-4 z-40 md:hidden">
          <a href="#home" className="font-semibold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400" onClick={toggleMobileMenu}>Home</a>
          <a href="#about" className="font-semibold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400" onClick={toggleMobileMenu}>About</a>
          <a href="#skills" className="font-semibold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400" onClick={toggleMobileMenu}>Skills</a>
          <a href="#services" className="font-semibold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400" onClick={toggleMobileMenu}>Services</a>
          <a href="#portfolio" className="font-semibold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400" onClick={toggleMobileMenu}>Portfolio</a>
          <a href="#contact" className="font-semibold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400" onClick={toggleMobileMenu}>Contact</a>
          
          {/* Icon untuk theme switch di menu mobile */}
          <div className="flex justify-center mt-4 cursor-pointer" onClick={handleThemeSwitch}>
            {theme === 'light' && <BsSun className="text-yellow-500 hover:text-purple-600 transition-colors duration-300" size={24} />}
            {theme === 'dark' && <BsMoonStars className="text-blue-500 hover:text-purple-600 transition-colors duration-300" size={24} />}
            {theme === 'system' && <BsLaptop className="text-green-500 hover:text-purple-600 transition-colors duration-300" size={24} />}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
