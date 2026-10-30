import React from 'react';

import NavigationItem from './NavigationItem';
import { RxGithubLogo } from 'react-icons/rx';
import { ContactLinks } from './ContactLinks';

export default function Footer() {
  return (
    <footer
      className="flex flex-row items-center justify-between gap-8 w-screen p-8 md:p-16 mt-16 md:mt-24
        dark:bg-zinc-800 bg-gray-100"
    >
      <div className="flex flex-col gap-8">
        <div className="text-left">
          <p>Built by</p>
          <a
            href="https://github.com/ozanyusufoglu/"
            className="dark:text-white text-lg"
          >
            Ozan
          </a>
          <p>with 🐵🧠</p>
          <br />
          <ContactLinks />
        </div>
      </div>

      <ul className="flex flex-col self-end">
        <NavigationItem
          href="https://github.com/ozanyusufoglu/portfolio"
          className="p-0"
          label="Site source on GitHub"
        >
          <div className="flex sm:flex-row flex-col  items-end sm:items-center gap-4">
            <RxGithubLogo aria-hidden="true" />
            <p className="self-end">2026</p>
          </div>
        </NavigationItem>
      </ul>
    </footer>
  );
}
