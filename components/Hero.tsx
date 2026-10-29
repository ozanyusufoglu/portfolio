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
    <Section
      className="flex flex-col items-center justify-center gap-20 sm:mt-24 w-full xl:w-2/3
        mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={cn(
          // one column on phones (photo, name, about, techs);
          // from lg two columns: name + about on the left, photo + techs on the right
          'relative grid grid-cols-1 gap-8 text-lg w-full',
          'lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-x-16'
        )}
      >
        {/* sits at the bottom of the photo's row so it leads straight into the about text */}
        <div
          className="flex flex-col sm:items-start items-center gap-4 lg:col-start-1 lg:row-start-1
            lg:self-center"
        >
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
          width={220}
          height={220}
          className={cn(
            'rounded-2xl shadow-lg order-first justify-self-center sm:justify-self-start',
            'lg:order-none lg:col-start-2 lg:row-start-1'
          )}
        />

        <div
          className="prose antialiased text-base dark:prose-invert max-w-none lg:col-start-1
            lg:row-start-2"
        >
          {about.map((paragraph) => (
            <p key={paragraph}>
              <InlineMarkdown text={paragraph} />
            </p>
          ))}
        </div>

        <div className="lg:col-start-2 lg:row-start-2">
          <TechStackList />
        </div>
      </motion.div>
    </Section>
  );
}
