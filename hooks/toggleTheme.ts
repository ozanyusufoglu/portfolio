'use client';
import { useEffect, useState } from 'react';
type Theme = 'light' | 'dark';

export default function useToggleTheme() {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;

    if (localTheme === 'light') {
      setTheme(localTheme);
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return { theme, setTheme };
}
