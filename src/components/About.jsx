import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePhoto from '../assets/FARHAN 2.PNG';
import cvFile from '../assets/CV MUHAMMAD FARHAN NABIL.pdf';
import { FaUser, FaPhoneAlt, FaEnvelope, FaDownload } from 'react-icons/fa';

function About() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4 sm:px-8 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Bagian Gambar */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"
          data-aos="zoom-in"
        >
          <div className="relative p-4 flex justify-center">
            <motion.img
              src={profilePhoto}
              alt="Profile"
              className="rounded-md w-3/4 sm:w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
          </div>
        </motion.div>

        {/* Bagian Konten */}
        <motion.div
          className="w-full md:w-1/2 md:pl-8 text-center md:text-left"
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            About Me
          </motion.h2>
          <motion.h3
            className="text-lg sm:text-xl font-semibold text-green-500 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Introduction
          </motion.h3>
          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base lg:text-lg px-2 sm:px-0 text-justify max-w-full lg:max-w-prose mx-auto md:mx-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Saya adalah mahasiswa Program Studi Sistem Informasi Universitas Negeri Surabaya, saat ini sedang menempuh semester 3. Menjadi seorang programmer sudah menjadi cita-cita saya sejak dua tahun lalu saat masih duduk di bangku SMA. Saya sangat tertarik untuk mengembangkan kemampuan di bidang teknologi informasi, khususnya pengembangan website dengan fokus sebagai front-end developer. Saya juga aktif sebagai anggota BEM Fakultas Teknik Departemen Advokesma, dan memiliki semangat untuk terus belajar agar dapat mengikuti perkembangan teknologi yang terus berkembang di masa kini dan masa yang akan datang.
          </motion.p>

          <motion.div className="space-y-2 mb-6" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center justify-center md:justify-start text-gray-900 dark:text-white">
              <FaUser className="mr-3 text-blue-600 dark:text-blue-400" />
              <span>Muhammad Farhan Nabil</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-900 dark:text-white">
              <FaPhoneAlt className="mr-3 text-green-600 dark:text-green-400" />
              <span>+62 851 5844 2747</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-900 dark:text-white">
              <FaEnvelope className="mr-3 text-red-600 dark:text-red-400" />
              <span>muhammadfarhan2747@gmail.com</span>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start"
            whileHover={{ scale: 1.1 }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href={cvFile}
              download="CV_MUHAMMAD FARHAN NABIL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
            >
              <FaDownload className="mr-2" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
