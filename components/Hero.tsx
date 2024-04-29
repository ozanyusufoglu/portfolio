'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from './Section';
import About from '@/markdown/about-me.mdx';

export default function Hero() {
  return (
    <Section
      styleProps="flex flex-auto flex-col items-center
          justify-center gap-x-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative mx-auto flex w-1/2 flex-row items-center justify-center gap-x-4 text-lg flex-wrap"
      >
        <div className="flex flex-row gap-x-8 justify-between">
          <h1 className="text-5xl font-bold">Özgür Ozan Yusufoglu</h1>
          <Image
            src="/ozgur_ozan.jpeg"
            alt="ozan portrait"
            width={200}
            height={200}
            className="rounded-md"
          ></Image>
        </div>
        <div className="prose antialiased text-lg">
          <About />
        </div>

        {/* <div className="prose">
          <p>Hi, nice to meet you🤞</p>

          <p>
            I’m a Frontend Engineer with with Electrical & Electronics
            Engineering background. I formerly worked as an R&D Manager and
            coordinated multiple projects supported by The Scientific and
            Technological Research Council of Turkey (TUBITAK), the national
            partner of EU Horizon 2020 Programme. While I wasn't actively coding
            with this hat, I led the development team to build user-centered
            products that tackled critical problems in diverse domains, by
            utilizing R&D methodologies.
          </p>
        </div> */}
      </motion.div>
    </Section>
  );
}
