'use client';
import { useEffect, useState } from 'react';
type Theme = 'light' | 'dark';

export default function useToggleTheme() {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;

    console.log(theme);
    if (localTheme === 'light' && localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return { theme, setTheme };
}
