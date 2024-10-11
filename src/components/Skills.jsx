import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import atom from '../assets/atom.png';
import bootstrap from '../assets/bootstrap.png';
import cSharp from '../assets/c-sharp.png';
import css3 from '../assets/css-3.png';
import figma from '../assets/figma.png';
import html5 from '../assets/html-5.png';
import illustrator from '../assets/illustrator.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import swift from '../assets/swift.png';
import typescript from '../assets/typescript.png';

const skills = [
  { name: 'HTML5', image: html5, color: 'rgb(227, 66, 52)' },
  { name: 'CSS3', image: css3, color: 'rgb(13, 202, 240)' },
  { name: 'Atom', image: atom, color: 'rgb(59, 130, 246)' },
  { name: 'Bootstrap', image: bootstrap, color: 'rgb(102, 51, 153)' },
  { name: 'JavaScript', image: js, color: 'rgb(240, 219, 79)' },
  { name: 'C#', image: cSharp, color: 'rgb(128, 0, 128)' },
  { name: 'Python', image: python, color: 'rgb(52, 140, 49)' },
  { name: 'Swift', image: swift, color: 'rgb(255, 69, 58)' },
  { name: 'TypeScript', image: typescript, color: 'rgb(0, 122, 204)' },
  { name: 'Figma', image: figma, color: 'rgb(255, 136, 0)' },
  { name: 'Illustrator', image: illustrator, color: 'rgb(255, 204, 0)' },
  
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
    }, 2000); // Delay of 3 seconds
  };

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 ${cardBackgroundColor} dark:bg-gray-800 rounded-lg transition-all duration-500 transform hover:scale-110`}
      style={{
        boxShadow: isHovered ? `0 0 50px ${skill.color}` : '0 0 0 rgba(0, 0, 0, 0)',
        transition: 'box-shadow 0.5s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-transform duration-500 transform hover:scale-105"
      />
    </div>
  );
}

function Skills() {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';

  return (
    <div
      id="skills"
      className="py-20 bg-gray-50 text-center dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h2>
      <div className="flex justify-center flex-wrap gap-6 px-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} cardBackgroundColor={cardBackgroundColor} />
        ))}
      </div>
    </div>
  );
}

export default Skills;