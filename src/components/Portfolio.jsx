import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import illustrator from '../assets/illustrator.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import swift from '../assets/swift.png';
import typescript from '../assets/dita20.png';
import dita from '../assets/dita21.png';

function Portfolio() {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

  return (
    <div
      id="Portfolio"
      className="py-20 text-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Portfolio</h2>
      <h3 className="text-xl font-semibold text-green-500 mb-8">Our Recent Work</h3>
      
      {/* First row with four cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center px-4">
        {/* Project 1 */}
        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={illustrator}
            alt="Illustrator Project"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Project 2 */}
        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={js}
            alt="JavaScript Project"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Project 3 */}
        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={python}
            alt="Python Project"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Project 4 */}
        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={swift}
            alt="Swift Project"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Second row with two centered cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {/* Project 5 */}
        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={typescript}
            alt="TypeScript Project"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Project 6 */}
        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={dita}
            alt="Dita Project"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
