import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        index++;
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

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Selamat pagi";
    } else if (hour >= 12 && hour < 15) {
      return "Selamat siang";
    } else if (hour >= 15 && hour < 18) {
      return "Selamat sore";
    } else {
      return "Selamat malam";
    }
  };

  const handleWhatsAppClick = () => {
    const greeting = getGreeting();
    const message = `${greeting}, Farhan.\n\nPerkenalkan, saya [Nama HRD/HR] dari [PT APA]. Kami tertarik dengan portofolio Anda sebagai Frontend Developer, terutama pada proyek-proyek yang Anda kerjakan sebelumnya yang terlihat sangat inovatif.\n\nKami ingin menawarkan Anda posisi sebagai Frontend Developer di perusahaan kami, dengan fokus pada pengembangan antarmuka aplikasi web modern dan responsif. Jika Anda tertarik, kami dapat mendiskusikan lebih lanjut mengenai detail pekerjaan ini dan proses seleksi.\n\nApakah Anda memiliki waktu untuk berdiskusi lebih lanjut?`;

    const whatsappUrl = `https://wa.me/6285158442747?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-16 pt-24 md:pt-16 h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start mt-8 md:mt-0 px-4 md:px-0 order-2 md:order-1 z-20"
        data-aos="fade-right"
      >
        <div className="flex space-x-4 mb-4">
          <motion.a
            href="https://www.instagram.com/farhaaan____/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/Boasfar27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={24} />
          </motion.a>
        </div>
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          data-aos="fade-up"
        >
          Hello, I'm
        </h1>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-600 dark:text-purple-400 mt-4 min-h-[80px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {displayName}
        </h2>
        <p
          className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mt-4 px-2 sm:px-0 text-justify max-w-md lg:max-w-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A professional and detail-oriented junior programmer with expertise in
          front-end development. Ready to present responsive and innovative
          interface solutions, and committed to continue learning and contributing
          maximally.
        </p>
        <motion.button
          onClick={handleWhatsAppClick}
          className="mt-4 sm:mt-6 md:mt-8 p-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 z-30 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaWhatsapp size={24} />
        </motion.button>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 order-1 md:order-2 relative z-10"
        data-aos="fade-left"
      >
        <motion.img
          src={profilePhoto}
          alt="Profile"
          className="w-3/4 sm:w-4/5 md:w-full max-w-xs md:max-w-sm lg:max-w-md object-contain rounded-md"
          style={{ maxHeight: '80vh' }}
          loading="lazy"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </motion.section>
  );
}

export default Home;
