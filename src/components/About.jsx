import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import profilePhoto from '../assets/FARHAN 2.PNG'; // Sesuaikan dengan path gambar Anda
import cvFile from '../assets/CV_Muhammad Farhan Nabil-01.pdf';
import { FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="about" 
    className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Bagian Gambar */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative p-4">
            <img 
              src={profilePhoto} 
              alt="Profile" 
              className="rounded-md w-full h-auto object-cover"
              style={{maxHeight: '80vh' }}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
          <h3 className="text-xl font-semibold text-green-500 mb-4">Introduction</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 mt-4 px-2 sm:px-0 text-justify">
          I am a student of the Information Systems Study Program at Surabaya State University, currently in semester 3. Becoming a programmer has been my dream since two years ago when I was still in high school. I am very interested in developing skills in the field of information technology, especially in website development with a focus as a front-end developer. I am also active as a member of BEM in the Advokesma department, and have the passion to continue learning in order to keep up with the development of technology that continues to grow in the present and the future. I believe that by utilizing my skills as a junior programmer, I can contribute to the company and compete in this dynamic digital era.
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-center md:justify-start text-gray-900 dark:text-white">
              <FaUser className="mr-2" />
              <span>Muhammad Farhan Nabil</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-900 dark:text-white">
              <FaPhoneAlt className="mr-2" />
              <span>+62 851 5844 2747</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-900 dark:text-white">
              <FaEnvelope className="mr-2" />
              <span>muhammadfarhan2747@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <a 
              href={cvFile} 
              download="CV_Muhammad_Farhan_Nabil.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
