'use client';
import { GoMoon } from 'react-icons/go';
import { GoSun } from 'react-icons/go';
import Button from './Button';
import useToggleTheme from '@/hooks/toggleTheme';
import cn from '@/util/cn';

export default function ToggleThemeBtn({ className }) {
  const { theme, setTheme } = useToggleTheme();

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
      className={cn(
        'rounded-full p-4 cursor-pointer transition active:brutalActive',
        className
      )}
      onClick={handleClick}
    >
      {theme === 'dark' ? <GoSun /> : <GoMoon />}
    </Button>
  );
}
