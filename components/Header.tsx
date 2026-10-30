import React from 'react';
import NavigationItem from './NavigationItem';
import { links } from '@/util/data';

export default function Header() {
  return (
    <header className="sm:absolute w-screen z-10">
      <div
        className="flex items-center justify-center sm:justify-between w-screen flex-nowrap px-4
          sm:px-12 animate-enter [--enter-y:-100px]"
      >
        {/* the whole home link hides on phones, not just its text, so no empty link is left behind */}
        <ul className="hidden sm:block">
          <NavigationItem href="/" label="Home">
            <div className="flex flex-row justify-center gap-4 items-center">
              {/* <OzanLogo dark={theme === 'dark'} /> */}
              <span className="text-3xl font-semibold text-gray-950 dark:text-gray-50">OY</span>
            </div>
          </NavigationItem>
        </ul>

        <nav className="p-2 dark:border-slate-950 z-40">
          <ul className="flex flex-nowrap items-center">
            {links.map((item, index) => (
              <NavigationItem
                key={index}
                href={item.link}
              >
                <p>{item.title}</p>
              </NavigationItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
