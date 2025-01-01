import  { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../context/ThemeContext';
import { CodeBracketIcon, ComputerDesktopIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

function Services() {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const cardTextColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <motion.div
      id="services"
      className="py-16 md:py-20 lg:py-24 text-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        data-aos="fade-down"
      >
        Services
      </motion.h2>
      <motion.h3
        className="text-xl font-semibold text-green-500 mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        data-aos="fade-down"
      >
        Our Services
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Web Development Card */}
        <motion.div
          className={`w-full h-60 md:h-64 lg:h-72 rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} ${cardTextColor} 
                      dark:bg-gray-800 hover:shadow-lg hover:shadow-pink-500 hover:scale-105 flex flex-col items-center justify-center`}
          data-aos="fade-up"
          data-aos-delay="100"
          whileHover={{ scale: 1.05 }}
        >
          <CodeBracketIcon className="w-14 h-14 mb-4 text-black dark:text-white" />
          <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-white text-black">
            Web Development
          </h3>
          <a
            href="#"
            className="mt-2 block cursor-pointer text-blue-500 dark:text-purple-500 hover:text-blue-700 dark:hover:text-purple-400 text-sm md:text-base"
          >
            Learn More
          </a>
        </motion.div>

        {/* User Interface Design Card */}
        <motion.div
          className={`w-full h-60 md:h-64 lg:h-72 rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} ${cardTextColor} 
                      dark:bg-gray-800 hover:shadow-lg hover:shadow-pink-500 hover:scale-105 flex flex-col items-center justify-center`}
          data-aos="fade-up"
          data-aos-delay="200"
          whileHover={{ scale: 1.05 }}
        >
          <ComputerDesktopIcon className="w-14 h-14 mb-4 text-black dark:text-white" />
          <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-white text-black">
            User Interface Design
          </h3>
          <a
            href="#"
            className="mt-2 block cursor-pointer text-blue-500 dark:text-purple-500 hover:text-blue-700 dark:hover:text-purple-400 text-sm md:text-base"
          >
            Learn More
          </a>
        </motion.div>

        {/* Mobile Development Card */}
        <motion.div
          className={`w-full h-60 md:h-64 lg:h-72 rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} ${cardTextColor} 
                      dark:bg-gray-800 hover:shadow-lg hover:shadow-pink-500 hover:scale-105 flex flex-col items-center justify-center`}
          data-aos="fade-up"
          data-aos-delay="300"
          whileHover={{ scale: 1.05 }}
        >
          <DevicePhoneMobileIcon className="w-14 h-14 mb-4 text-black dark:text-white" />
          <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-white text-black">
            Mobile Development
          </h3>
          <a
            href="#"
            className="mt-2 block cursor-pointer text-blue-500 dark:text-purple-500 hover:text-blue-700 dark:hover:text-purple-400 text-sm md:text-base"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;
