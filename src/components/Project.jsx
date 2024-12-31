import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Project() {
  const { theme } = useContext(ThemeContext); // Ambil tema dari Context

  return (
    <section
      id="project"
      className={`py-16 md:py-20 lg:py-24 text-center 
        transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20
      `}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          My Projects
        </h2>
        <p className="text-lg mb-12">
          Berikut adalah beberapa proyek yang pernah saya kerjakan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contoh Kartu Proyek */}
          <div
            className={`rounded-lg shadow-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <img
              src="https://picsum.photos/id/1/200/300"
              alt="Project Name"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Nama Proyek
              </h3>
              <p>
                Deskripsi singkat tentang proyek ini.
              </p>
            </div>
          </div>
          {/* Tambahkan lebih banyak kartu proyek jika diperlukan */}
          <div
            className={`rounded-lg shadow-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <img
              src="https://picsum.photos/id/1/200/300"
              alt="Project Name"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Nama Proyek
              </h3>
              <p>
                Deskripsi singkat tentang proyek ini.
              </p>
            </div>
          </div>
          <div
            className={`rounded-lg shadow-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <img
              src="https://picsum.photos/id/1/200/300"
              alt="Project Name"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Nama Proyek
              </h3>
              <p>
                Deskripsi singkat tentang proyek ini.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Project;
