import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../assets/KOSONG.png';
import image2 from '../assets/CONTOH1.webp';
import image3 from '../assets/CONTOH2.webp';

// Import logo teknologi
import laravelLogo from '../assets/laravel.svg';
import viteLogo from '../assets/vite.png';
import tailwindLogo from '../assets/tailwindcss.png';
import phpLogo from '../assets/php.png';
import jsLogo from '../assets/js.png';

const projects = [
  {
    id: 1,
    title: 'Image Converter',
    description: 'Aplikasi web untuk mengkonversi berbagai format file',
    image: image3,
    link: 'https://boasfarconvert.my.id/',
    github: 'https://github.com/Boasfar27/imageconvert',
    technologies: [
      { name: 'Laravel', logo: laravelLogo },
      { name: 'Vite', logo: viteLogo },
      { name: 'TailwindCSS', logo: tailwindLogo }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Premium Everyday',
    description: 'Platform e-commerce untuk produk premium',
    image: image2,
    link: 'https://premiumeveryday.my.id/',
    github: 'https://github.com/yourusername/project2',
    technologies: [
      { name: 'PHP', logo: phpLogo },
      { name: 'TailwindCSS', logo: tailwindLogo },
      { name: 'Javascript', logo: jsLogo }
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: 'Project baru akan segera hadir',
    image: image1,
    link: 'https://example.com/project-3',
    github: 'https://github.com/yourusername/project3',
    technologies: [{ name: 'Under Development', logo: '' }],
    gradient: 'from-green-500 to-emerald-500'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      id="project"
      className="py-16 md:py-20 lg:py-24 transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            variants={cardVariants}
          >
            Projects
          </motion.h2>
          <motion.h3
            className="text-xl font-semibold text-green-500 mb-6"
            variants={cardVariants}
          >
            My Projects
          </motion.h3>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`relative group overflow-hidden rounded-2xl
                bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
                hover:bg-gray-50 dark:hover:bg-gray-800
                shadow-lg hover:shadow-2xl transition-all duration-500`}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-gray-900/90 via-black/50 dark:via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={20} />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    tech.logo ? (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 px-7 py-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-10 h-9"
                          title={tech.name}
                        />
                      </motion.div>
                    ) : (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        {tech.name}
                      </span>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Project;

