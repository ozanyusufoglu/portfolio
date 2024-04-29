'use client';
import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';
import { projectPreviewProps } from '@/types/projectPreview';
import Section from './Section';

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
  const tagElements = tags?.map((tag, index) => (
    <span
      key={index}
      className="bg-slate-100 rounded-md group-hover:bg-slate-200 transition p-2 text-sm"
    >
      {tag}
    </span>
  ));

  return (
    <section
      className="flex flex-row justify-center gap-x-8 shadow-md hover:shadow-lg
        hover:-translate-y-1 transition dark:bg-slate-600 dark:shadow-slate-800 min-h-5
        dark:hover:shadow-slate-950 bg-slate-50 w-2/3 overflow-hidden relative group p-8
        hover:bg-slate-100"
    >
      <div
        className="flex flex-col gap-4 w-2/3 pl-12 ml-auto group-even:mr-auto group-even:p-8
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
        className="absolute group-odd:left-8 top-8 shadow-lg hover:shadow-xl group-even:right-8
          rounded-lg transition group-even:group-hover:-rotate-3
          group-odd:group-hover:rotate-3"
      ></Image>
    </section>
  );
}
