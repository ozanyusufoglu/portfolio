'use client';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { navItemProps } from '@/types/navigationItem';

const NavigationItem = ({ children, href }: navItemProps) => {
  return (
    <motion.li
      className="list-none cursor-default"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link href={href}>
        <div
          className="p-4 cursor-pointer text-lg font-md text-gray-500 transition-all duration-200
            ease-out hover:text-violet-950 dark:text-white dark:hover:text-violet-300 z-50"
        >
          {children}
        </div>
      </Link>
    </motion.li>
  );
};

export default NavigationItem;
