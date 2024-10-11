import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaInstagram, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="contact" 
      className="py-20 px-4 sm:px-8 lg:px-16 text-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Contact</h2>
      
      <div className="flex flex-wrap justify-center space-x-6 mb-8">
        <a
          href="https://wa.me/6285158442747"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FaWhatsapp size={30} />
        </a>
        <a
          href="https://www.instagram.com/farhaaan____/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://github.com/Boasfar27"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="muhammadfarhan2747@gmail.com"
          className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FaEnvelope size={30} />
        </a>
      </div>

      <form className="max-w-lg mx-auto">
        <input
          className={`w-full p-3 mb-4 border rounded ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          type="text"
          placeholder="Your Name"
        />
        <input
          className={`w-full p-3 mb-4 border rounded ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className={`w-full p-3 mb-4 border rounded ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          rows="4"
          placeholder="Write Message..."
        ></textarea>
        <button className="w-full bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition-colors duration-300">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
