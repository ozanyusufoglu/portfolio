'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import cn from '@/util/cn';
type sectionProps = {
  className?: string;
  children: ReactNode;
};
export default function Section({ children, className }: sectionProps) {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn('min-h-screen w-screen p-8 sm:p-20', className)}
    >
      {children}
    </motion.section>
  );
}
