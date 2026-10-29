'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from './Section';
import InlineMarkdown from './InlineMarkdown';
import { ContactLinks } from './ContactLinks';
import TechStackList from './TechStackLinks';
import cn from '@/util/cn';

// `about` is passed in by a server component rather than imported here,
// so the rest of resume.json (phone, address) never reaches the client bundle
export default function Hero({ about }: { about: readonly string[] }) {
  return (
    // same column as the project list below (app/projects/page.tsx)
    <Section className="flex flex-col items-center justify-center gap-20 sm:mt-24 w-full xl:w-2/3 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={cn(
          'relative flex flex-col items-center justify-center gap-8 text-lg flex-wrap w-full'
        )}
      >
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center w-full">
          <div className="flex flex-col sm:items-start items-center gap-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
              Ozan Yusufoglu
            </h1>
            <p className="font-normal text-xl text-gray-500">
              Software / Product Engineer
            </p>
            <ContactLinks />
          </div>

          <Image
            src="/ozgur_ozan.jpeg"
            alt="ozan portrait"
            width={200}
            height={200}
            className="rounded-2xl order-first sm:order-none shadow-lg"
          ></Image>
        </div>
        {/* left-aligned to the column; prose keeps a readable ~65ch line length */}
        <div className="prose antialiased text-base dark:prose-invert self-start">
          {about.map((paragraph) => (
            <p key={paragraph}>
              <InlineMarkdown text={paragraph} />
            </p>
          ))}
        </div>
        <div className="flex flex-row w-full justify-start">
          <TechStackList />
        </div>
      </motion.div>
    </Section>
  );
}
