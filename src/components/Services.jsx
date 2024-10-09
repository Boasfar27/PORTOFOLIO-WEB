import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { CodeBracketIcon, ComputerDesktopIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

function Services() {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const cardTextColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div
      id="services"
      className="py-20 text-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Services</h2>
      <h3 className="text-xl font-semibold text-green-500 mb-4">Our Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Card 1: Web Development */}
        <div
  className={`w-full h-52 rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} ${cardTextColor} 
              dark:bg-gray-800 hover:shadow-lg hover:shadow-pink-500 hover:scale-105`}
>
  <br />
  <CodeBracketIcon className="w-12 h-12 mx-auto mt-4 dark:text-white text-black" />
  <h3 className="text-xl font-bold mt-2 dark:text-white text-black">Web Development</h3>
  <a href="#"
     className="mt-2 block cursor-pointer text-blue-500 dark:text-purple-500 hover:text-blue-700 dark:hover:text-purple-400">
    Learn More
  </a>
</div>

{/* Card 2: User Interface Design */}
<div
  className={`w-full h-52 rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} ${cardTextColor} 
              dark:bg-gray-800 hover:shadow-lg hover:shadow-pink-500 hover:scale-105`}
>
  <br />
  <ComputerDesktopIcon className="w-12 h-12 mx-auto mt-4 dark:text-white text-black" />
  <h3 className="text-xl font-bold mt-2 dark:text-white text-black">User Interface Design</h3>
  <a href="#"
     className="mt-2 block cursor-pointer text-blue-500 dark:text-purple-500 hover:text-blue-700 dark:hover:text-purple-400">
    Learn More
  </a>
</div>

{/* Card 3: Mobile Development */}
<div
  className={`w-full h-52 rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} ${cardTextColor} 
              dark:bg-gray-800 hover:shadow-lg hover:shadow-pink-500 hover:scale-105`}
>
  <br />
  <DevicePhoneMobileIcon className="w-12 h-12 mx-auto mt-4 dark:text-white text-black" />
  <h3 className="text-xl font-bold mt-2 dark:text-white text-black">Mobile Development</h3>
  <a href="#"
     className="mt-2 block cursor-pointer text-blue-500 dark:text-purple-500 hover:text-blue-700 dark:hover:text-purple-400">
    Learn More
  </a>
</div>

      </div>
    </div>
  );
}

export default Services;