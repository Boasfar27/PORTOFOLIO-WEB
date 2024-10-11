import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import profilePhoto from '../assets/FARHAN 1.PNG';

function Home() {
  const [displayName, setDisplayName] = useState(''); 
  const fullName = "Muhammad Farhan Nabil"; 
  const typingSpeed = 150; 
  const delayBeforeRestart = 2000; 

  useEffect(() => {
    let index = 0;
    let forward = true; 

    const typeEffect = () => {
      if (forward && index <= fullName.length) {
        setDisplayName(fullName.substring(0, index)); 
        if (index > fullName.length) {
          forward = false; 
          setTimeout(typeEffect, delayBeforeRestart); 
          return;
        }
      } else if (!forward && index >= 0) {
        setDisplayName(fullName.substring(0, index)); 
        index--;
        if (index < 0) {
          forward = true; 
        }
      }
      setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();
  }, []);

  const handleWhatsAppClick = () => {
  
    window.open("https://wa.me/6285158442747?text=Hi%20Farhan%20apa%20kabar?", "_blank");
  };

  return (
    <section 
      id="home" 
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-16 pt-24 md:pt-16 h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
    >
    
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start mt-8 md:mt-0 px-4 md:px-0 order-2 md:order-1 z-20">
  
        <div className="flex space-x-4 mb-4">
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
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Hello, I'm
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-600 dark:text-purple-400 mt-4 min-h-[60px]">
          {displayName}
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-4">
          UI Designer and Web Developer who is creative, responsible, and passionate about learning the latest technology.
        </p>
        <button 
          onClick={handleWhatsAppClick} 
          className="mt-6 md:mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 z-30"
        >
          Contact Me
        </button>
      </div>

      {/* Bagian Gambar */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 order-1 md:order-2 relative z-10">
        <img 
          src={profilePhoto} 
          alt="Profile"
          className="w-4/5 md:w-full max-w-xs md:max-w-sm lg:max-w-md object-contain rounded-md"
          style={{
            maxHeight: '80vh', 
          }}
        />
      </div>
    </section>
  );
}

export default Home;
