import React, { createContext, useState, useEffect } from 'react';

// Membuat context untuk tema
export const ThemeContext = createContext();

// Membuat provider untuk tema yang akan menyebarkan state tema ke seluruh aplikasi
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    // Menerapkan perubahan tema ke elemen HTML utama
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
