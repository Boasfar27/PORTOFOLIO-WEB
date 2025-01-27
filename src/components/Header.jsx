import { useState, useEffect } from 'react';
import { BsSun, BsMoonStars, BsLaptop, BsList, BsX } from 'react-icons/bs';

function Header() {
  const [theme, setTheme] = useState('system');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#ffffff';
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#1a202c';
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const linkClasses = (link) =>
    `relative text-lg font-semibold transition-colors duration-300 cursor-pointer group ${
      activeLink === link
        ? 'text-purple-600 dark:text-purple-400'
        : 'text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400'
    }`;

  useEffect(() => {
    const sections = ['about', 'skills', 'services', 'certificate', 'project', 'contact'];

    const handleScroll = () => {
      let currentSection = 'home';
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (
          sectionElement &&
          sectionElement.getBoundingClientRect().top <= window.innerHeight / 2 &&
          sectionElement.getBoundingClientRect().bottom >= window.innerHeight / 2
        ) {
          currentSection = sectionId;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md fixed w-full z-50 dark:bg-gray-900 transition-colors duration-300">
      <h1
        onClick={() => handleLinkClick('home')}
        className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
      >
        My Portfolio
      </h1>

      <div className="md:hidden flex items-center">
        <div className="cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <BsX className="text-2xl text-gray-900 dark:text-white" />
          ) : (
            <BsList className="text-2xl text-gray-900 dark:text-white" />
          )}
        </div>
      </div>

      <nav className="hidden md:flex space-x-12 items-center">
        {['about', 'skills', 'services', 'certificate', 'project', 'contact'].map(
          (link) => (
            <a
              key={link}
              onClick={() => handleLinkClick(link)}
              className={linkClasses(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <span
                className="absolute left-0 bottom-0 w-0 h-1 bg-purple-600 transition-all duration-500 group-hover:w-full rounded-full"
              ></span>
            </a>
          )
        )}

        <div className="ml-4 cursor-pointer" onClick={handleThemeSwitch}>
          {theme === 'light' && (
            <BsSun
              className="text-yellow-500 hover:text-purple-600 transition duration-300"
              size={24}
            />
          )}
          {theme === 'dark' && (
            <BsMoonStars
              className="text-blue-500 hover:text-purple-600 transition duration-300"
              size={24}
            />
          )}
          {theme === 'system' && (
            <BsLaptop
              className="text-green-500 hover:text-purple-600 transition duration-300"
              size={24}
            />
          )}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col justify-center items-center space-y-8 z-40">
          {['about', 'skills', 'services', 'certificate', 'project', 'contact'].map((link) => (
            <a
              key={link}
              onClick={() => handleLinkClick(link)}
              className={`${linkClasses(link)} text-2xl`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

          <div className="mt-4 cursor-pointer" onClick={handleThemeSwitch}>
            {theme === 'light' && (
              <BsSun
                className="text-yellow-500 hover:text-purple-600 transition-colors duration-300"
                size={32}
              />
            )}
            {theme === 'dark' && (
              <BsMoonStars
                className="text-blue-500 hover:text-purple-600 transition-colors duration-300"
                size={32}
              />
            )}
            {theme === 'system' && (
              <BsLaptop
                className="text-green-500 hover:text-purple-600 transition-colors duration-300"
                size={32}
              />
            )}
          </div>
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-gray-900 dark:text-white text-2xl"
          >
            <BsX />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
