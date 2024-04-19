'use client';

import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import Monkey from './monkey';
import Brain from './brain';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative flex w-1/2 flex-row gap-x-4 text-lg"
    >
      <div className="flex flex-col gap-y-4">
        <p
          className={
            'text-3xl text-gray-500 dark:text-gray-100'
          }
        >
          {'Get things done,'}
          {/* {'Retire your monkeymind'} */}
        </p>
        <div className={'text-8xl font-bold'}>
          <h1>{"Don't"}</h1>
          <h1 className="text-red-400 dark:text-red-300">
            postpone
          </h1>
          <h1>yourself!</h1>
        </div>
        <p className="my-8">
          Focus on things really matters with
          Monkeymind, by bringing your attention
          and time management tools together.
        </p>
        <Button styleProps="flex-initial bg-red-50 shadow-red-300 hover:translate-y-2 hover:shadow-red-500 w-fit">
          Launch App
        </Button>
      </div>

      <div
        className="w-min-1/2 flex flex-col justify-center
          items-center gap-y-8"
      >
        {/* <p className="animate-bounce text-8xl">
          🐒

        </p> */}
        <Brain className="animate-pulse" />
        <Monkey className="animate-bounce absolute" />
        {/* <p className="animate-spin-slow text-9xl">
          🧠
        </p> */}
      </div>
    </motion.section>
  );
}
