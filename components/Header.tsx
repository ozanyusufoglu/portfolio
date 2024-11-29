'use client';
import React from 'react';
import NavigationItem from './NavigationItem';
import { motion } from 'framer-motion';
import { links } from '@/util/data';
import OzanLogo from '@/components/svgs/OzanLogo';
import ToggleThemeBtn from './ToggleThemeBtn';
import useToggleTheme from '@/hooks/toggleTheme';

export default function Header() {
  const { theme, setTheme } = useToggleTheme();
  return (
    <header className="sm:absolute w-screen z-10">
      <motion.div
        className="flex sm:flex-row items-center justify-between w-screen flex-nowrap p-y-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <NavigationItem href="/">
          <div className="flex flex-row justify-center gap-4 items-center">
            <OzanLogo dark={theme === 'dark'} />
            <span className="hidden sm:block text-3xl font-semibold text-gray-950 dark:text-gray-50">
              Ö.Ozan Yusufoglu
            </span>
          </div>
        </NavigationItem>

        <nav
          className="p-2 transition dark:border-slate-950 flex flex-wrap sm:flex-row items-center
            mr-4 z-40"
        >
          {links.map((item, index) => (
            <NavigationItem
              key={index}
              href={item.link}
            >
              <p>{item.title}</p>
            </NavigationItem>
          ))}

          <ToggleThemeBtn
            theme={theme}
            setTheme={setTheme}
          />
        </nav>
      </motion.div>
    </header>
  );
}
