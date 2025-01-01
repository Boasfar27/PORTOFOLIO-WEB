import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiExternalLink } from 'react-icons/fi'; // Import ikon tab baru dari react-icons
import { motion } from 'framer-motion'; // Import Framer Motion untuk animasi
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS

function Project() {
  const { theme } = useContext(ThemeContext); // Ambil tema dari Context

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi AOS
      easing: 'ease-in-out', // Jenis transisi
      offset: 100, // Jarak sebelum animasi mulai
    });
  }, []);

  return (
    <motion.section
      id="project"
      className={`py-16 md:py-20 lg:py-24 text-center 
        transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20
      `}
      initial={{ opacity: 0, y: 50 }} // Animasi awal (Framer Motion)
      animate={{ opacity: 1, y: 0 }} // Animasi masuk
      transition={{ duration: 1 }} // Durasi animasi masuk
    >
      <div className="container mx-auto">
        <h2
          className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          data-aos="fade-up" // AOS Animasi untuk heading
        >
          Projects
        </h2>
        <p
          className="text-xl font-semibold text-green-500 mb-8"
          data-aos="fade-up"
          data-aos-delay="100" // Delay untuk animasi
        >
          My Project
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200" // Delay untuk grid
        >
          {/* Contoh Kartu Proyek */}
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className={`rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
              }`}
              style={{ width: '100%', height: '420px' }} // Ukuran kartu lebih besar
              whileHover={{ scale: 1.05 }} // Framer Motion animasi hover
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="relative group h-full">
                {/* Gambar Proyek */}
                <img
                  src={`https://picsum.photos/id/${item}/600/400`} // Resolusi tinggi untuk gambar
                  alt={`Project ${item}`}
                  className="w-full h-full object-cover" // Gambar memenuhi seluruh kartu
                />

                {/* Overlay pada Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-2">Project {item}</h3>
                  <p className="mb-4 text-sm">
                    Deskripsi singkat tentang proyek ini.
                  </p>
                  <a
                    href={`https://example.com/project-${item}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2"
                  >
                    View Project <FiExternalLink size={18} /> {/* Ikon tab baru */}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Project;
