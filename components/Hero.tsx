'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from './Section';
import AboutMe from '@/markdown/about-me.mdx';
import { ContactLinks } from './ContactLinks';
import { TechStackList } from './TechStackLinks';
import cn from '@/util/cn';

export default function Hero() {
  return (
    <Section className="flex flex-col items-center justify-center gap-x-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={cn(
          `relative mx-auto flex flex-col items-center justify-center gap-8 text-lg
          flex-wrap`,

          // md
          'lg:w-1/2 md:flex-row'
        )}
      >
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-center md:text-left">
              Özgür Ozan Yusufoglu
            </h1>
            <p className="font-semibold text-2xl">Full-stack Developer</p>
            <ContactLinks />
          </div>

          <Image
            src="/ozgur_ozan.jpeg"
            alt="ozan portrait"
            width={200}
            height={200}
            className="rounded-md"
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
