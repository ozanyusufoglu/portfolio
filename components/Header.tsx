'use client';

import React, { ReactNode } from 'react';
import NavigationItem from './NavigationItem';
import { motion } from 'framer-motion';
import Button from './Button';
import { links } from '@/lib/data';

export default function Header() {
  return (
    <header className="fixed top-2 z-10 w-screen">
      <motion.div
        className="flex flex-row items-center justify-between w-screen px-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <NavigationItem href="/">
          logo
        </NavigationItem>
        <nav
          className="rounded-md border-2 border-solid border-purple-200
            bg-white dark:bg-slate-600 dark:border-slate-600
            bg-opacity-80 px-2 py-2 shadow-lg backdrop-blur-md"
        >
          <ul className="flex flex-row items-center">
            {links.map((item, index) => (
              <NavigationItem
                key={index}
                href={item.link}
              >
                <p>{item.title}</p>
              </NavigationItem>
            ))}
          </ul>
        </nav>
        <NavigationItem href="/dashboard">
          <Button
            styleProps="border-2 border-purple-600 bg-purple-100 text-slate-800 hover:text-purple-800"
            onClick={null}
          >
            Launch App
          </Button>
        </NavigationItem>
      </motion.div>
    </header>
  );
}
