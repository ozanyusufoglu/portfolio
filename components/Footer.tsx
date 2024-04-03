import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavigationItem from './NavigationItem';

export default function Footer() {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen
        bg-red-400 p-16 dark:bg-slate-600 dark:text-white"
    >
      <div>
        <NavigationItem href="https://github.com/ozanyusufoglu/scrimba-nextjs-workshop">
          <div className="flex flex-row items-center space-x-4 text-white">
            <Image
              src="github-mark.svg"
              alt="github logo"
              width={30}
              height={30}
            ></Image>
            <p>Show me to the source code</p>
          </div>
        </NavigationItem>
      </div>
      <div>
        <p>
          Built by{' '}
          <Link
            href="https://github.com/ozanyusufoglu/"
            className="font-bold text-white"
          >
            Özgür Ozan
          </Link>{' '}
          with 🐵🧠
        </p>
      </div>

      <p className="font-bold">2024</p>
    </div>
  );
}
