import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../assets/CONTOH.png';
import image2 from '../assets/CONTOH1.png';


const projects = [
  {
    id: 1,
    image: image1, // Menggunakan gambar lokal
    link: 'https://example.com/project-1',
    technologies: '',
  },
  {
    id: 2,
    image: image2, // Menggunakan gambar lokal
    link: 'https://premiumeveryday.my.id/',
    technologies: 'Html5, TailwindCSS, Javascript',
  },
  {
    id: 3,
    image: image1, // Menggunakan gambar lokal
    link: 'https://example.com/project-3',
    technologies: '',
  },
];

function Project() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (
    <motion.section
      id="project"
      className={`py-16 md:py-20 lg:py-24 text-center 
        transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2
          className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          data-aos="fade-up"
        >
          Projects
        </h2>
        <p
          className="text-xl font-semibold text-green-500 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          My Projects
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`rounded-2xl shadow-lg overflow-hidden relative transition-transform transform hover:scale-105 duration-300 ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
              }`}
              style={{ width: '100%', height: '420px' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="relative group h-full">
                {/* Gambar Proyek */}
                <img
                  src={project.image} // Menggunakan gambar lokal
                  alt={`Project ${project.id}`}
                  className="w-full h-full object-cover"
                />

                {/* Tombol View Project di kanan atas */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-2 rounded-md shadow-md flex items-center gap-2 group-hover:opacity-100 opacity-0 transition-opacity ease-linear duration-200 hover:bg-purple-700"
                >
                  View Project <FiExternalLink size={18} />
                </a>

                {/* Hover Warna Pink dengan Teks Teknologi */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-pink-500 flex justify-center items-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-3 transition-all duration-500 ease-in-out">
                  <p className="text-white text-sm md:text-base lg:text-lg font-semibold">
                    {project.technologies}
                  </p>
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

