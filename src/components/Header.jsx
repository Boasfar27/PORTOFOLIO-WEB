import { useState, useEffect } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { CgScreen } from 'react-icons/cg';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { BiHomeAlt2, BiUser, BiCode } from 'react-icons/bi';
import { MdOutlineDesignServices, MdOutlineMilitaryTech } from 'react-icons/md';
import { AiOutlineProject, AiOutlineContacts } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [theme, setTheme] = useState('system');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'about', icon: BiUser, label: 'About' },
    { id: 'skills', icon: BiCode, label: 'Skills' },
    { id: 'services', icon: MdOutlineDesignServices, label: 'Services' },
    { id: 'certificate', icon: MdOutlineMilitaryTech, label: 'Certificate' },
    { id: 'project', icon: AiOutlineProject, label: 'Project' },
    { id: 'contact', icon: AiOutlineContacts, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    `relative text-lg font-semibold transition-all duration-300 cursor-pointer group flex items-center gap-2 ${activeLink === link
      ? 'text-purple-600 dark:text-purple-400'
      : 'text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400'
    }`;

  useEffect(() => {
    const sections = navLinks.map(link => link.id);
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
  }, [navLinks]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'py-4 bg-white/80 backdrop-blur-lg shadow-lg dark:bg-gray-900/80'
        : 'py-6 bg-white dark:bg-gray-900'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
         
          <motion.h1
            onClick={() => handleLinkClick('home')}
            className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Boasfar
          </motion.h1>
        </motion.div>

        <div className="md:hidden">
          <motion.button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <RiCloseLine className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <RiMenu4Line className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </motion.button>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={linkClasses(link.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeLink === link.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}

          <motion.button
            onClick={handleThemeSwitch}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' && <HiOutlineSun className="w-5 h-5 text-yellow-500" />}
            {theme === 'dark' && <HiOutlineMoon className="w-5 h-5 text-blue-500" />}
            {theme === 'system' && <CgScreen className="w-5 h-5 text-green-500" />}
          </motion.button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-[72px] p-4 bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg md:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`${linkClasses(link.id)} text-xl py-2`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="w-6 h-6" />
                    {link.label}
                  </motion.a>
                ))}

                <motion.button
                  onClick={handleThemeSwitch}
                  className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-xl"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {theme === 'light' && (
                    <>
                      <HiOutlineSun className="w-6 h-6 text-yellow-500" />
                      <span className="text-gray-900 dark:text-white">Light Mode</span>
                    </>
                  )}
                  {theme === 'dark' && (
                    <>
                      <HiOutlineMoon className="w-6 h-6 text-blue-500" />
                      <span className="text-gray-900 dark:text-white">Dark Mode</span>
                    </>
                  )}
                  {theme === 'system' && (
                    <>
                      <CgScreen className="w-6 h-6 text-green-500" />
                      <span className="text-gray-900 dark:text-white">System Mode</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;
