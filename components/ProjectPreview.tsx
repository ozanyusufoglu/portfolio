'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { GrTools } from 'react-icons/gr';
import cn from '@/util/cn';
import LoopVideo, { loopVideo } from './LoopVideo';

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
  // a product loop shown in place of the screenshot
  video?: loopVideo | null;
  tags: readonly string[] | null;
  tools: readonly string[] | null;
  outputs?: readonly {
    title: string;
    link: string;
    imageUrl: StaticImageData;
  }[];
  // position in its list; odd cards mirror the image side and tilt direction
  index?: number;
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
  video,
  tags,
  tools,
  outputs,
  index = 0,
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

  // scroll-linked styles bypass MotionConfig's reducedMotion, so they check it themselves
  const reduceMotion = useReducedMotion();
  const scaleRatio = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0.9, 1]);
  const opacityRatio = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  // the screenshot turns as the card travels through the whole viewport,
  // from entering at the bottom to leaving at the top
  const { scrollYProgress: passProgress } = useScroll({
    target: projectPreviewRef,
    offset: ['start end', 'end start'],
  });
  const imageOnLeft = index % 2 === 1;
  const tilt = reduceMotion ? 0 : imageOnLeft ? -6 : 6;
  const imageRotate = useTransform(passProgress, [0, 1], [tilt, -tilt]);
  const imageY = useTransform(
    passProgress,
    [0, 1],
    [tilt === 0 ? 0 : 40, tilt === 0 ? 0 : -40]
  );

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
      className="bg-violet-50 rounded-full group-hover:bg-violet-50 transition p-2 text-xs px-4
        flex flex-row gap-x-2 items-center dark:bg-zinc-700 dark:group-hover:bg-zinc-700"
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
            `relative flex flex-col shadow-md transition-[transform,box-shadow,background-color]
            bg-zinc-50 w-full text-lg`,
            'overflow-hidden rounded',
            'hover:-translate-y-1 hover:shadow-lg',
            'focus-visible:-translate-y-1 focus-visible:shadow-lg',
            'dark:bg-zinc-800 dark:hover:bg-zinc-950 dark:focus-visible:bg-zinc-950',
            imageUrl && 'lg:min-h-[360px]'
          )}
        >
          {/* Image — a banner on top on mobile; always the still, never the video.
              16:9 matches the landing screenshots, so they show whole and centered;
              taller ones (KUKO) keep their top */}
          {imageUrl ? (
            <div className="relative w-full aspect-video lg:hidden">
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          ) : null}

          {/* Text content — pushed to the side opposite the image on desktop */}
          <div
            className={cn(
              'flex flex-col gap-4 p-6 sm:p-10',
              imageUrl && 'lg:w-[55%]',
              imageUrl && imageOnLeft && 'lg:ml-auto'
            )}
          >
            <h3 className="font-bold text-xl text-balance">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">{tagElements}</div>
          </div>

          {/* Image — floats at the side on desktop, tilting with scroll and bleeding off the bottom edge */}
          {imageUrl ? (
            <motion.div
              style={{ rotate: imageRotate, y: imageY }}
              className={cn(
                'hidden lg:block absolute top-12 w-[42%]',
                imageOnLeft ? 'left-8' : 'right-8'
              )}
            >
              {video ? (
                <LoopVideo
                  {...video}
                  title={title}
                  sizes="(min-width: 1280px) 28vw, 42vw"
                  media="(min-width: 1024px)"
                  className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <Image
                  src={imageUrl}
                  alt=""
                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300
                    group-hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 28vw, 42vw"
                />
              )}
            </motion.div>
          ) : null}
        </a>
      ) : (
        // prosssional work
        <div
          className={cn(
            `group rounded-md flex flex-row text-md transition-colors w-full overflow-hidden
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
              <div>
                <h3 className="font-medium text-balance">
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      className="underline underline-offset-4"
                    >
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{misc}</p>
              </div>

              <p className="text-gray-400 dark:text-gray-400 sm:ml-auto text-sm">
                {dates}
              </p>
            </div>

            <p className="font-regular">{description}</p>
            {outputs?.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {outputs.map((output) => (
                  <a
                    key={output.link}
                    href={output.link}
                    target="_blank"
                    className={cn(
                      `flex flex-col overflow-hidden rounded shadow-md bg-zinc-50
                      transition-[transform,box-shadow,background-color]`,
                      'hover:-translate-y-1 hover:shadow-lg',
                      'focus-visible:-translate-y-1 focus-visible:shadow-lg',
                      'dark:bg-zinc-800 dark:hover:bg-zinc-950 dark:focus-visible:bg-zinc-950'
                    )}
                  >
                    <div className="relative w-full aspect-video">
                      <Image
                        src={output.imageUrl}
                        alt={output.title}
                        fill
                        // two tiles side by side in the work page's 3xl column
                        sizes="(min-width: 640px) 360px, 100vw"
                        className="object-cover object-left-top"
                      />
                    </div>
                    <p className="p-3 text-sm font-medium">{output.title} ↗</p>
                  </a>
                ))}
              </div>
            ) : null}
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
