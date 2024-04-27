'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative flex w-1/2 flex-row gap-x-4 text-lg flex-wrap"
    >
      <div className="flex flex-row gap-x-8 justify-between items-center">
        <h1 className="text-5xl font-bold">Özgür Ozan Yusufoglu</h1>
        <Image
          src="/ozgur_ozan.jpeg"
          alt="ozan portrait"
          width={200}
          height={200}
          className="rounded-md"
        ></Image>
      </div>

      <p>Hi, nice to meet you🤞</p>
      <br />
      <p>
        I’m a Frontend Engineer with with Electrical & Electronics Engineering
        background. I formerly worked as an R&D Manager and coordinated multiple
        projects supported by The Scientific and Technological Research Council
        of Turkey (TUBITAK), the national partner of EU Horizon 2020 Programme.
        While I wasn't actively coding with this hat, I led the development team
        to build user-centered products that tackled critical problems in
        diverse domains, by utilizing R&D methodologies.
      </p>
    </motion.section>
  );
}
