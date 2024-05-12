import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavigationItem from './NavigationItem';
import { RxGithubLogo } from 'react-icons/rx';
import { ContactLinks } from './ContactLinks';
import Ozanlogo from './svgComponents/ozanlogo';

export default function Footer() {
  return (
    <div
      className="flex flex-row items-center gap-8 w-screen p-8 md:p-16 dark:bg-gray-700
        bg-gray-100"
    >
      <div className="flex flex-col gap-y-8">
        <div className="text-left">
          <p>Built by</p>
          <Link
            href="https://github.com/ozanyusufoglu/"
            className="dark:text-white text-lg"
          >
            Özgür Ozan
          </Link>
          <p>with 🐵🧠</p>
          <br />
          <ContactLinks />
        </div>
      </div>

      <div className="flex flex-col ml-auto">
        <NavigationItem href="https://github.com/ozanyusufoglu/portfolio">
          <div className="flex md:flex-row flex-col text-right items-end md:items-center gap-4">
            <RxGithubLogo />
            <p className="">Take me the to source code</p>
          </div>
        </NavigationItem>
        <p className="self-center">2024</p>
      </div>
    </div>
  );
}
