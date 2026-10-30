import Link from 'next/link';
import React, { ReactNode } from 'react';
import cn from '@/util/cn';

export type navItemProps = {
  children: ReactNode;
  href: string;
  className?: string;
  // for items whose content is an icon or logo rather than readable text
  label?: string;
};

const NavigationItem = ({ children, href, className, label }: navItemProps) => {
  return (
    <li className="list-none cursor-default animate-enter [--enter-y:-100px]">
      <Link href={href} aria-label={label} className="group/nav">
        <div
          className={cn(
            'p-2 sm:p-4 cursor-pointer text-lg font-md text-gray-500 transition-colors duration-200',
            'ease-out hover:text-violet-950 group-focus-visible/nav:text-violet-950',
            'dark:text-white dark:hover:text-violet-300 dark:group-focus-visible/nav:text-violet-300',
            className
          )}
        >
          {children}
        </div>
      </Link>
    </li>
  );
};

export default NavigationItem;
