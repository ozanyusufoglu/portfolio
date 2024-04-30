import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavigationItem from './NavigationItem';
import { RxLinkedinLogo } from 'react-icons/rx';
import { RxGithubLogo } from 'react-icons/rx';
import { RxEnvelopeClosed } from 'react-icons/rx';

export default function Footer() {
  return (
    <div
      className="flex flex-row items-center justify-between text-white w-screen bg-slate-400 p-16
        dark:bg-slate-800 dark:text-white"
    >
      <div>
        <NavigationItem href="https://github.com/ozanyusufoglu/scrimba-nextjs-workshop">
          <div className="flex flex-row items-center space-x-4">
            <RxGithubLogo color="white" />
            <p className="text-white">Show me to the source code</p>
          </div>
        </NavigationItem>
      </div>
      <p>2024</p>
      <div className="flex flex-col gap-y-8">
        <div className="text-right">
          <p>Built by</p>
          <Link
            href="https://github.com/ozanyusufoglu/"
            className="font-bold text-slate-950 dark:text-white"
          >
            Ozan
          </Link>
          <p>with 🐵🧠</p>
        </div>
        <ContactLinks />
      </div>
    </div>
  );
}

export function ContactLinks() {
  return (
    <div className="flex flex-row gap-x-4">
      <a
        href="https://github.com/ozanyusufoglu/"
        target="_blank"
      >
        <RxGithubLogo />
      </a>
      <a
        href="#"
        target="_blank"
      >
        <RxLinkedinLogo />
      </a>
      <a href="mailto: ozanyusufoglu@protonmail.com">
        <RxEnvelopeClosed />
      </a>
    </div>
  );
}
