'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
type sectionProps = {
  styleProps?: string;
  children: ReactNode;
};
export default function Section({
  children,
  styleProps,
}: sectionProps) {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`min-h-screen w-screen 
     p-20 ${styleProps}`}
    >
      {children}
    </motion.section>
  );
}
