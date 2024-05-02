'use client';

import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { projectPreviewProps } from '@/types/projectPreview';
import Section from './Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactDOM, useRef } from 'react';
import { GrTools } from 'react-icons/gr';
import cn from '@/util/cn';
import { compileFunction } from 'vm';

// 👇 a practical way to declare a types from data throug typeof

// import { projects } from '@/util/data';
// type projectProps = (typeof projects)[number];

export default function ProjectPreview({
  title,
  description,
  slug,
  personal,
  dates,
  company,
  position,
  duration,
  icon,
  body,
  previewItems,
  tags,
  imageUrl,
  tools,
  link,
  misc,
}: projectPreviewProps) {
  const projectPreviewRef = useRef<HTMLDivElement>(null);

  // To animate an targetElement with scroll, you need to pass 2 values to useScroll
  // 1. element ref to be animated
  // 2. offset values for viewport and the targetElement in an array,
  //    to define where animation starts and ends depending on the scroll position
  //    - 0 represents the start of the viewport,
  //    - 1 represents the end of the targetElements (from bottom to top)

  const { scrollYProgress } = useScroll({
    target: projectPreviewRef,
    offset: ['0 1', '1.33 1'],
  });

  const scaleRatio = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityRatio = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const tagElements = tags?.map((tag, index) => (
    <span
      key={index}
      className="bg-zinc-100 rounded-md group-hover:bg-zinc-200 transition p-2 text-sm
        dark:bg-gray-500 dark:group-hover:bg-gray-600"
    >
      {tag}
    </span>
  ));

  const toolElements = tools?.map((tool, index) => (
    <span
      key={index}
      className="bg-violet-50 rounded-md group-hover:bg-violet-100 transition p-2 text-sm flex
        flex-row gap-x-2 items-center dark:bg-gray-500 dark:group-hover:bg-gray-600"
    >
      <GrTools />
      {tool}
    </span>
  ));
  return (
    <motion.div
      style={{ scale: scaleRatio, opacity: opacityRatio }}
      ref={projectPreviewRef}
      className="group"
    >
      {personal ? (
        <div
          className={cn(
            // component base
            `justify-center text-lg gap-x-8 shadow-md transition-all bg-zinc-50 w-full
            overflow-hidden relative sm:p-8 min-h-5`,

            // hover
            'hover:-translate-y-1 hover:shadow-lg ',

            // dark
            'dark:bg-gray-700 dark:hover:bg-gray-800'

            // professional Project
          )}
        >
          <div
            className={cn(
              // textContent & tags base
              'flex flex-col gap-4 p-4',

              // With images push text left or right
              imageUrl &&
                `lg:group-odd:ml-auto lg:group-odd:pl-20 lg:group-even:mr-auto
                lg:group-even:pr-20 xl:w-2/3`
            )}
          >
            <h1 className="font-bold">{title}</h1>
            <p className="font-regular line-clamp-4">{description}</p>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-wrap gap-2 text-sm">
                {tagElements}
                {toolElements}
              </div>
            </div>
          </div>
          {imageUrl ? (
            <a
              href={link}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={imageUrl}
                alt={title}
                width={300}
                height={300}
                className="hidden lg:block absolute group-odd:left-8 top-12 shadow-lg hover:shadow-xl
                  group-even:right-8 rounded-lg transition group-even:group-hover:-rotate-3
                  group-odd:group-hover:rotate-3"
              />
            </a>
          ) : null}
        </div>
      ) : (
        // prosssional work
        <div
          className={cn(
            `group rounded-md flex flex-row text-md transition-all w-full overflow-hidden
            relative min-h-5 p-8 bg-zinc-50`,

            // hover
            'hover:shadow-sm hover:bg-zinc-50 ',

            // dark
            'dark:bg-gray-600 dark:hover:bg-gray-700'
          )}
        >
          <div
            className={cn(
              'flex flex-col gap-4'

              // With images push text left or right
            )}
          >
            <h1 className="font-bold">{title}</h1>
            <p className="text-gray-500">{misc}</p>
            <p className="font-regular line-clamp-4">{description}</p>
            <div className="flex flex-row ">
              <div className="flex flex-wrap gap-2 text-sm">
                {tagElements}
                {toolElements}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
