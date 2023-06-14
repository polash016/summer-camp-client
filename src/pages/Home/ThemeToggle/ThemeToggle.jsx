import React, { useState, useEffect } from 'react';
import { Switch } from '@material-tailwind/react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    setIsDarkMode(currentTheme === 'dark');
    updateTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
  };

  const updateTheme = (theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  return (
   <div className='fixed top-6 right-8'>
     <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      color="blue"
      ripple="light"
      id="theme-toggle"
    />
   </div>
  );
};

export default ThemeToggle;
