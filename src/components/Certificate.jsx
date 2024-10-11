import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import certificate1 from '../assets/SERTIFIKAT 1.jpg';
import certificate2 from '../assets/SERTIFIKAT 2.jpg';
import certificate3 from '../assets/SERTIFIKAT 3.jpg';
import certificate4 from '../assets/SERTIFIKAT 4.png';
import certificate5 from '../assets/SERTIFIKAT 5.jpg';
import certificate6 from '../assets/SERTIFIKAT 1.jpg';

function Certificate() {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

  return (
    <div
      id="certificate" 
      className="py-20 text-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Certificate</h2>
      <h3 className="text-xl font-semibold text-green-500 mb-8">My Certificate</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center px-4">
        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={certificate1}
            alt="Certificate 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={certificate2}
            alt="Certificate 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={certificate3}
            alt="Certificate 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={certificate4}
            alt="Certificate 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={certificate5}
            alt="Certificate 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div
          className={`w-full max-w-[300px] h-[200px] rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
        >
          <img
            src={certificate6}
            alt="Certificate 6"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Certificate;
