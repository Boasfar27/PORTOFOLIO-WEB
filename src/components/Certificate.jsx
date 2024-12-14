import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import certificate1 from '../assets/SERTIFIKAT 1.jpg';
import certificate2 from '../assets/SERTIFIKAT 2.jpg';
import certificate3 from '../assets/SERTIFIKAT 3.jpg';
import certificate6 from '../assets/SERTIFIKAT 6.jpg';
import certificate7 from '../assets/SERTIFIKAT 7.jpg';
import certificate8 from '../assets/SERTIFIKAT 8.jpg';
import certificate9 from '../assets/SERTIFIKAT 9.jpg';
import certificate10 from '../assets/SERTIFIKAT 11.jpg';

function Certificate() {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

  // Daftar sertifikat dengan gambar dan link masing-masing
  const certificates = [
    {
      image: certificate3,
      link: 'https://www.dicoding.com/certificates/81P2N6MOJXOY',
    },
    {
      image: certificate1,
      link: 'https://www.dicoding.com/certificates/KEXL155YYXG2',
    },
    {
      image: certificate8,
      link: 'https://www.dicoding.com/certificates/MRZMYWR8RZYQ',
    },
    {
      image: certificate9,
      link: 'https://www.dicoding.com/certificates/0LZ04N4ERP65',
    },
    {
      image: certificate10,
      link: 'https://drive.google.com/file/d/1wX04ogGJswGMjTdt_CbQJk4iSW-lajE1/view?usp=drivesdk',
    },
    {
      image: certificate6,
      link: 'https://www.codepolitan.com/c/WS4JHCS/',
    },
    {
      image: certificate7,
      link: 'https://www.codepolitan.com/c/EKOZT35/',
    },
    {
      image: certificate2,
      link: 'https://certificates.revou.co/muhammad-farhan-nabil-certificate-attendance-sefc.pdf',
    },
  ];

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
      id="certificate"
      className="py-16 md:py-20 lg:py-24 text-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
        data-aos="fade-down"
      >
        Certificate
      </motion.h2>
      <motion.h3
        className="text-xl font-semibold text-green-500 mb-8"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        My Certificates
      </motion.h3>

      {/* Grid Layout for Certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {certificates.map((certificate, index) => (
          <motion.a
            key={index}
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full max-w-[350px] mx-auto rounded-lg shadow-md transition-all duration-300 ${cardBackgroundColor} dark:bg-gray-800 hover:shadow-lg hover:shadow-green-500 hover:scale-105`}
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Delay untuk animasi setiap item
            whileHover={{ scale: 1.05 }}
          >
            <div className="aspect-w-16 aspect-h-9 w-full h-auto rounded-lg overflow-hidden">
              <img
                src={certificate.image}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Certificate;
