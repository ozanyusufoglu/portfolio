import { GoMoon } from 'react-icons/go';
import { GoSun } from 'react-icons/go';
import Button from './Button';

export default function ToggleThemeBtn({ theme, setTheme }) {
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
      className="rounded-full p-4 cursor-pointer transition active:brutalActive top-8 right-8"
      onClick={handleClick}
    >
      {theme === 'dark' ? <GoSun /> : <GoMoon />}
    </Button>
  );
}
