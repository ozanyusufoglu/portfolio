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
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn('w-full p-8', className)}
    >
      {children}
    </motion.section>
  );
}
