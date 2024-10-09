import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
    id="Contact"
    className="py-20 text-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Contact</h2>
      <form className="max-w-lg mx-auto">
        <input
          className={`w-full p-2 mb-4 border ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          type="text"
          placeholder="Your Name"
        />
        <input
          className={`w-full p-2 mb-4 border ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className={`w-full p-2 mb-4 border ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          rows="4"
          placeholder="Write Message..."
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
