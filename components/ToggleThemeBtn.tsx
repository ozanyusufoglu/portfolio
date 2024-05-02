import { GoMoon } from 'react-icons/go';
import { GoSun } from 'react-icons/go';
import Button from './Button';
import { useEffect, useState } from 'react';

export default function ToggleThemeBtn() {
  type Theme = 'light' | 'dark';

  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;

    console.log(localTheme);
    if (localTheme === 'light') {
      setTheme(localTheme);
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
    }
    // if (
    //   localStorage.theme === 'dark' ||
    //   (!('theme' in localStorage) &&
    //     window.matchMedia('(prefers-color-scheme: dark)').matches)
    // ) {
    //   document.documentElement.classList.add('dark');
    // } else {
    //   document.documentElement.classList.remove('dark');
    // }
  }, []);

  const handleClick = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Button
      styleProps="rounded-full p-4 cursor-pointer transition active:brutalActive top-8 right-8"
      onClick={handleClick}
    >
      {theme === 'dark' ? <GoSun /> : <GoMoon />}
    </Button>
  );
}
