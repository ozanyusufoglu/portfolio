import React from 'react';

import NavigationItem from './NavigationItem';
import { RxGithubLogo } from 'react-icons/rx';
import { ContactLinks } from './ContactLinks';

export default function Footer() {
  return (
    <div
      className="flex flex-row items-center justify-between gap-8 w-screen p-8 md:p-16
        dark:bg-gray-700 bg-gray-100"
    >
      <div className="flex flex-col gap-8">
        <div className="text-left">
          <p>Built by</p>
          <a
            href="https://github.com/ozanyusufoglu/"
            className="dark:text-white text-lg"
          >
            Özgür Ozan
          </a>
          <p>with 🐵🧠</p>
          <br />
          <ContactLinks />
        </div>
      </div>

      <div className="flex flex-col self-end">
        <NavigationItem
          href="https://github.com/ozanyusufoglu/portfolio"
          className="p-0"
        >
          <div className="flex sm:flex-row flex-col text-right items-end sm:items-center gap-4">
            <RxGithubLogo />
            <p className="">See the source code</p>
          </div>
        </NavigationItem>
        <p className="self-end">2024</p>
      </div>
    </div>
  );
}
