
import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>('light');
  
  const setMode = (mode: Theme) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
      document.documentElement.classList.add('dark');
    } else {
      setMode('light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return { theme, toggleTheme };
};

export default useDarkMode;
