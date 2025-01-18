import  { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaInstagram, FaGithub, FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function Contact() {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'message') {
      const wordCount = value.trim().split(/\s+/).filter(Boolean).length; 
      if (wordCount > 500) {
        Swal.fire({
          icon: 'error',
          title: 'Batas Kata Terlampaui!',
          text: 'Maksimal 500 kata diperbolehkan.',
          confirmButtonColor: '#d33',
        });
        return;
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_rkbaiya',
        'template_7bghmex',
        {
          from_name: formData.name,
          message: formData.message,
          email: formData.email,
          to_name: 'Farhan',
        },
        'mEbd9WRZIqlcbJCBd'
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Pesan Terkirim!',
            text: 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.',
            confirmButtonColor: '#3085d6',
          });

          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Pesan Gagal Terkirim!',
            text: 'Mohon coba lagi beberapa saat.',
            confirmButtonColor: '#d33',
          });
        }
      );
  };

  return (
    <motion.div
      id="contact"
      className="py-20 px-4 sm:px-8 lg:px-16 text-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        data-aos="fade-down"
      >
        Contact
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center space-x-6 mb-8"
        data-aos="fade-up"
      >
        <a
          href="https://wa.me/6285158442747"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FaWhatsapp size={30} />
        </a>
        <a
          href="https://www.instagram.com/farhaaan____/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://github.com/Boasfar27"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="mailto:muhammadfarhan2747@gmail.com"
          className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FaEnvelope size={30} />
        </a>
      </motion.div>

      <motion.form
        className="max-w-lg mx-auto"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <input
          className={`w-full p-3 mb-4 border rounded ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          className={`w-full p-3 mb-4 border rounded ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          className={`w-full p-3 mb-4 border rounded ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          rows="4"
          name="message"
          placeholder="Write Message..."
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {formData.message.trim().split(/\s+/).filter(Boolean).length} / 500 words
        </p>
        <motion.button
          type="submit"
          className="w-full flex justify-center items-center bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <FaPaperPlane className="mr-2" size={20} />
          Send
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;

