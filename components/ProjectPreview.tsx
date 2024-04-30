'use client';

import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';
import { projectPreviewProps } from '@/types/projectPreview';
import Section from './Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactDOM, useRef } from 'react';

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
  duration,
  icon,
  body,
  previewItems,
  tags,
  imageUrl,
}: projectPreviewProps) {
  const projectPreviewRef = useRef<HTMLDivElement>(null);

  // To animate an targetElement with scroll, you need to pass 2 values to useScroll
  // 1. element ref to be animated
  // 2. offset values for viewport and the targetElement in an array,
  //    to define where animation starts and ends depending on the scroll position
  //    * [0, 1] -> 0 represents the start of the viewport, 1 represents the end of the elements (from bottom to top)
  //    *

  const { scrollYProgress } = useScroll({
    target: projectPreviewRef,
    offset: ['0 1', '1.33 1'],
  });

  const scaleRatio = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityRatio = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const tagElements = tags?.map((tag, index) => (
    <span
      key={index}
      className="bg-zinc-100 rounded-md group-hover:bg-violet-100 transition p-2 text-sm"
    >
      {tag}
    </span>
  ));

  return (
    <motion.div
      style={{ scale: scaleRatio, opacity: opacityRatio }}
      ref={projectPreviewRef}
      className="lg:w-2/3 group"
    >
      <section
        // typescript generics -> somefunction<T>(input:T) { return [input]}
        //

        className="flex flex-row justify-center gap-x-8 shadow-md hover:shadow-lg
          hover:-translate-y-1 transition dark:bg-slate-600 dark:shadow-slate-800 min-h-5
          dark:hover:shadow-slate-950 bg-zinc-50 w-full overflow-hidden relative p-8
          hover:bg-zinc-50"
      >
        <div
          className="flex flex-col gap-4 lg:w-2/3 pl-12 ml-auto group-even:mr-auto group-even:p-8
            group-even:ml-0"
        >
          <h1 className="font-bold">{title}</h1>
          <p className="font-regular line-clamp-4">{description}</p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-wrap gap-4">{tagElements}</div>
            {/* <Link href={`/posts/${slug}`}>
            <Button
              styleProps="hover:text-violet-400 shadow-violet-100"
              disabled={false}
              onClick={() => console.log('clicked')}
            >
              details...
            </Button>
          </Link> */}
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="hidden lg:block absolute group-odd:left-8 top-8 shadow-lg hover:shadow-xl
            group-even:right-8 rounded-lg transition group-even:group-hover:-rotate-3
            group-odd:group-hover:rotate-3"
          // className="absolute group-odd:left-8 top-8 shadow-lg hover:shadow-xl group-even:right-8
          //   rounded-lg transition group-even:group-hover:scale-105
          //   group-odd:group-hover:scale-105"
        />
      </section>
    </motion.div>
  );
}
