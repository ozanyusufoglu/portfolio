import React from 'react';
import cn from '@/util/cn';

export type experienceProps = {
  companyName: string;
  description: string;
  projects?: {}[];
  dates: string;
  position: string;
  link: string;
};

export default function WorkExperienceLite({
  companyName,
  description,
  projects,
  dates,
  position,
  link,
}: experienceProps) {
  return (
    <div
      className={cn(
        // component base
        'flex flex-col rounded-md relative',
        // dark
        '  dark:text-gray-300'
        // hover
        // ' hover:bg-gray-100'
      )}
    >
      <a
        href={link}
        target="_blank"
        className="cursor-pointer py-[2px] w-full rounded-lg hover:bg-indigo-100
          dark:hover:bg-indigo-500 flex flex-row gap-x-2 items-center p-4"
      >
        <p className="dark:text-gray-100">{position},</p>
        <h3 className="text-gray-400">{companyName}</h3>
        <p className="border-b-[1px] relative flex-grow"></p>
        <span className="text-gray-400 ml-auto text-right">{dates}</span>
      </a>
    </div>
  );
}
