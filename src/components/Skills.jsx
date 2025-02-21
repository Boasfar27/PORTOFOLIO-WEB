import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes untuk validasi props
import { color, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../context/ThemeContext';
import atom from '../assets/atom.png';
import bootstrap from '../assets/bootstrap.png';
import tailwindcss from '../assets/tailwindcss.png';
import css3 from '../assets/css-3.png';
import figma from '../assets/figma.png';
import html5 from '../assets/html-5.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import php from '../assets/php.png';
import typescript from '../assets/typescript.png';
import vite from '../assets/vite.png';
import vue from '../assets/vue.png';
import laravel from '../assets/laravel.svg';

const skills = [
  { name: 'HTML5', image: html5, color: 'rgb(227, 66, 52)' },
  { name: 'CSS3', image: css3, color: 'rgb(13, 202, 240)' },
  { name: 'Bootstrap', image: bootstrap, color: 'rgb(102, 51, 153)' },
  { name: 'JavaScript', image: js, color: 'rgb(240, 219, 79)' },
  { name: 'TailwindCSS', image: tailwindcss, color: 'rgb(51, 153, 255)' },
  { name: 'Python', image: python, color: 'rgb(52, 140, 49)' },
  { name: 'Atom', image: atom, color: 'rgb(59, 130, 246)' },
  { name: 'TypeScript', image: typescript, color: 'rgb(0, 122, 204)' },
  { name: 'PHP', image: php, color: 'rgb(67, 80, 190)' },
  { name: 'Vite', image: vite, color: 'rgb(30, 94, 236)' },
  { name: 'Vue.js', image: vue, color: 'rgb(40, 144, 120)' },
  { name: 'Figma', image: figma, color: 'rgb(255, 136, 0)' },
  {name: 'laravel', image:laravel, color: 'rgb(239, 68, 68)'},
];


function SkillCard({ skill, cardBackgroundColor }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const timeoutRef = React.useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000); // Delay of 2 seconds
  };

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <motion.div
      className={`relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 ${cardBackgroundColor} dark:bg-gray-800 rounded-lg transition-all duration-500 transform hover:scale-110`}
      style={{
        boxShadow: isHovered ? `0 0 50px ${skill.color}` : '0 0 0 rgba(0, 0, 0, 0)',
        transition: 'box-shadow 0.5s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.15 }}
      data-aos="zoom-in"
      data-aos-delay={50 * Math.random()} // Random delay for AOS
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-transform duration-500 transform hover:scale-105"
      />
    </motion.div>
  );
}

// Validasi props menggunakan PropTypes
SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  cardBackgroundColor: PropTypes.string.isRequired,
};

function Skills() {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <motion.div
      id="skills"
      className="py-20 bg-gray-50 text-center dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        data-aos="fade-down"
      >
        Skills
      </motion.h2>
      <p
        className="text-xl font-semibold text-green-500 mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        My Skills
      </p>
      <motion.div
        className="flex justify-center flex-wrap gap-6 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} cardBackgroundColor={cardBackgroundColor} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
