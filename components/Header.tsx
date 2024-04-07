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
          <div className="flex flex-row justify-center gap-x-4 items-center">
            <span className="text-5xl">🐵</span>
            <span
              className="text-3xl font-bold text-gray-950
                dark:text-gray-300"
            >
              monkeymind
            </span>
          </div>
        </NavigationItem>
        <nav
          className="rounded-md bg-white dark:bg-slate-600
            bg-opacity-80 px-2 py-2 backdrop-blur-md
            transition border-gray-600 border-2
            dark:border-slate-950"
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
            styleProps="border-2 bg-red-50 text-red-950 hover:text-violet-300 shadow-red-300 hover:shadow-red-400 dark:shadow-slate-700"
            onClick={null}
          >
            Launch App
          </Button>
        </NavigationItem>
      </motion.div>
    </header>
  );
}
