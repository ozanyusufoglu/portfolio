'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from './Section';
import AboutMe from './about-me.mdx';
import { ContactLinks } from './ContactLinks';
import TechStackList from './TechStackLinks';
import cn from '@/util/cn';

export default function Hero() {
  return (
    <Section className="flex flex-col items-center justify-center gap-20 sm:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={cn(
          'relative flex flex-col items-center justify-center gap-8 text-lg flex-wrap',

          // md
          'xl:w-1/2 xl:flex-row'
        )}
      >
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center w-full">
          <div className="flex flex-col sm:items-start items-center gap-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
              Özgür Ozan Yusufoglu
            </h1>
            <p className="font-semibold text-3xl">Front-end Engineer</p>
            <ContactLinks />
          </div>

          <Image
            src="/ozgur_ozan.jpeg"
            alt="ozan portrait"
            width={200}
            height={200}
            className="rounded-md order-first sm:order-none shadow-lg"
          ></Image>
        </div>
        <div className="prose antialiased text-lg dark:prose-invert">
          <AboutMe />
        </div>
        <div className="flex flex-row w-full justify-end">
          <TechStackList />
        </div>
      </motion.div>
    </Section>
  );
}
