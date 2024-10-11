import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext); 

  return (
    <footer
      id="Footer" 
      className={`py-4 text-center 
      transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white
      }`}
    >
      <p>By Muhammad Farhan Nabil &copy; 2024.</p>
    </footer>
  );
}

export default Footer;
