'use client';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type navItemProps = {
  children: ReactNode;
  href: string;
};

const NavigationItem = ({
  children,
  href,
}: navItemProps) => {
  return (
    <motion.li
      className="list-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link href={href}>
        <div
          className="cursor-pointer p-4 text-lg text-gray-500
            transition-all duration-200 ease-out
            hover:font-bold hover:text-violet-800
            dark:text-white dark:hover:text-violet-300"
        >
          {children}
        </div>
      </Link>
    </motion.li>
  );
};

export default NavigationItem;
