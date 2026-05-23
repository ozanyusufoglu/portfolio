'use client';
import { useEffect, useState } from 'react';
type Theme = 'light' | 'dark';

export default function useToggleTheme() {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.toggle('dark', localTheme === 'dark');
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const resolved: Theme = systemDark ? 'dark' : 'light';
      setTheme(resolved);
      document.documentElement.classList.toggle('dark', systemDark);
    }
  }, []);

  return { theme, setTheme };
}
