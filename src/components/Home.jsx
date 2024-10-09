import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import profilePhoto from '../assets/FARHAN 1.PNG';

function Home() {
  const [displayName, setDisplayName] = useState(''); // Untuk animasi mengetik nama
  const fullName = "Muhammad Farhan Nabil"; // Nama lengkap yang akan diketik
  const typingSpeed = 150; // Kecepatan animasi mengetik (ms per huruf)
  const delayBeforeRestart = 2000; // Delay sebelum animasi mengetik ulang (ms)

  useEffect(() => {
    let index = 0;
    let forward = true; // Menentukan arah pengetikan (maju atau menghapus)

    const typeEffect = () => {
      if (forward && index <= fullName.length) {
        setDisplayName(fullName.substring(0, index)); // Menampilkan substring nama
        index++;
        if (index > fullName.length) {
          forward = false; // Berhenti ketika nama sudah selesai diketik
          setTimeout(typeEffect, delayBeforeRestart); // Tunggu sebelum mulai menghapus
          return;
        }
      } else if (!forward && index >= 0) {
        setDisplayName(fullName.substring(0, index)); // Menghapus substring nama
        index--;
        if (index < 0) {
          forward = true; // Setelah dihapus sepenuhnya, mulai mengetik ulang
        }
      }
      setTimeout(typeEffect, typingSpeed);
    };

    typeEffect(); // Memulai efek pengetikan
  }, []);

  const handleWhatsAppClick = () => {
    // Link ke WhatsApp dengan nomor dan pesan default
    window.open("https://wa.me/6285158442747?text=Hi%20Farhan%20apa%20kabar?", "_blank");
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-16 pt-24 md:pt-16 h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Bagian Teks dan Tombol */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start mt-8 md:mt-0 px-4 md:px-0 order-2 md:order-1 z-20">
        {/* Ikon Sosial Media */}
        <div className="flex space-x-4 mb-4">
          <a 
            href="https://www.instagram.com/farhaaan____/" 
            target="" 
            rel="noopener noreferrer" 
            className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a 
            href="https://github.com/Boasfar27" 
            target="" 
            rel="noopener noreferrer" 
            className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Hello, I'm
        </h1>
        <h2 className="text-5xl font-extrabold text-purple-600 dark:text-purple-400 mt-4 min-h-[60px]">
          {displayName}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          UI Designer and Web Developer who is creative, responsible, and passionate about learning the latest technology.
        </p>
        <button 
          onClick={handleWhatsAppClick} 
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
          style={{ zIndex: 30 }} // Pastikan tombol berada di atas elemen lain
        >
          Contact Me
        </button>
      </div>

      {/* Bagian Gambar */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 order-1 md:order-2 relative z-10">
        <img 
          src={profilePhoto} 
          alt="Profile"
          className="w-full max-w-xs h-auto md:max-w-sm lg:max-w-md object-contain rounded-md"
          style={{
            maxHeight: '80vh', // memastikan gambar tidak terpotong pada layar kecil
          }}
        />
      </div>
    </section>
  );
}

export default Home;
