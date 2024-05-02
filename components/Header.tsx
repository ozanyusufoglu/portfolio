'use client';

import React, { ReactNode } from 'react';
import NavigationItem from './NavigationItem';
import { motion } from 'framer-motion';
import Button from './Button';
import { links } from '@/util/data';
import Ozanlogo from '@/components/svgComponents/ozanlogo';
import { GoMoon } from 'react-icons/go';
import ToggleThemeBtn from './ToggleThemeBtn';

export default function Header() {
  return (
    <header className="md:absolute top-2 w-screen cursor-pointer z-10">
      <motion.div
        className="flex flex-row items-center justify-between w-screen px-8 flex-wrap
          lg:flex-nowrap"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <NavigationItem href="/">
          <div className="flex flex-row justify-center gap-x-4 items-center">
            <Ozanlogo className="scale-x-100" />
            {/* <span className="text-3xl font-bold text-gray-950 dark:text-gray-300">
              Ö.Ozan Yusufoglu
            </span> */}
          </div>
        </NavigationItem>
        <nav className="px-2 py-2 transition dark:border-slate-950 flex flex-row items-center z-40">
          {links.map((item, index) => (
            <NavigationItem
              key={index}
              href={item.link}
            >
              <p>{item.title}</p>
            </NavigationItem>
          ))}

          <ToggleThemeBtn />
          {/* <Button
            styleProps="rounded-full p-4 cursor-pointer"
            onClick={null}
          >
            <GoMoon />
          </Button> */}
        </nav>
      </motion.div>
    </header>
  );
}
