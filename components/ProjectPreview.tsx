'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GrTools } from 'react-icons/gr';
import cn from '@/util/cn';

export type projectPreviewProps = {
  title: string;
  slug: string;
  description: string;
  personal?: boolean;
  link?: string | null;
  dates?: string | null;
  company?: string | null;
  position?: string | null;
  misc?: string | null;
  duration?: string | null;
  icon?: string | null;
  body: string | null;
  previewItems?: readonly string[] | null;
  imageUrl?: StaticImageData | string | null;
  tags: readonly string[] | null;
  tools: readonly string[] | null;
};
// 👇 a practical way to declare a types from data throug typeof

// import { projects } from '@/util/data';
// type projectProps = (typeof projects)[number];

export default function ProjectPreview({
  title,
  description,
  slug,
  personal,
  link,
  dates,
  company,
  position,
  misc,
  duration,
  icon,
  body,
  previewItems,
  imageUrl,
  tags,
  tools,
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
      className="bg-zinc-100 rounded-full group-hover:bg-zinc-100 transition p-2 px-4 text-sm
        dark:bg-zinc-700 dark:group-hover:bg-zinc-600"
    >
      {tag}
    </span>
  ));

  const toolElements = tools?.map((tool, index) => (
    <span
      key={index}
      className="bg-violet-50 rounded-full group-hover:bg-violet-50 transition p-2 text-sm px-4 flex
        flex-row gap-x-2 items-center dark:bg-zinc-700 dark:group-hover:bg-zinc-700"
    >
      {/* <GrTools /> */}
      {tool}
    </span>
  ));
  return (
    <motion.div
      style={{ scale: scaleRatio, opacity: opacityRatio }}
      ref={projectPreviewRef}
      className="group dark:text-gray-300"
    >
      {personal ? (
        <a
          href={link}
          target="_blank"
          className={cn(
            'flex flex-col lg:flex-row shadow-md transition-all bg-zinc-50 w-full',
            'overflow-hidden rounded min-h-[280px]',
            'hover:-translate-y-1 hover:shadow-lg',
            'dark:bg-zinc-800 dark:hover:bg-zinc-950'
          )}
        >
          {/* Text content */}
          <div className="flex flex-col gap-4 p-6 sm:p-10 flex-1 justify-center">
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="line-clamp-4 text-gray-600 dark:text-gray-400">{description}</p>
            <div className="flex flex-wrap gap-2 text-sm mt-auto">
              {tagElements}
            </div>
          </div>

          {/* Image — top on mobile, right panel on desktop */}
          {imageUrl ? (
            <div className="relative w-full h-52 order-first lg:order-last lg:w-72 xl:w-80 lg:h-auto flex-shrink-0">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          ) : null}
        </a>
      ) : (
        // prosssional work
        <div
          className={cn(
            `group rounded-md flex flex-row text-md transition-all w-full overflow-hidden
            relative p-4`,

            // hover
            // 'hover:bg-gray-50',

            // dark
            'dark:bg-zinc-800 dark:hover:bg-zinc-950 dark:group-hover:hover:bg-zinc-700'
          )}
        >
          <div
            className={cn(
              'flex flex-col gap-4'

              // With images push text left or right
            )}
          >
            <div className="flex flex-col gap-x-4 sm:flex-row">
              <div>       <h1 className="font-medium">{title}</h1>
              <p className="text-gray-500 dark:text-gray-400">{misc}</p></div>
       
              <p className="text-gray-400 dark:text-gray-400 sm:ml-auto text-sm">
                {dates}
              </p>
            </div>

            <p className="font-regular">{description}</p>
            <div className="flex flex-row">
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
