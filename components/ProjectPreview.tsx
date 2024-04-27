'use client';
import Link from 'next/link';
import Button from './Button';
import { projectPreviewProps } from '@/app/types/projectPreview';

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
}: projectPreviewProps) {
  const tagElements = tags?.map((tag, index) => (
    <span
      key={index}
      className="bg-gray-100 rounded-sm p-2 "
    >
      {tag}
    </span>
  ));

  return (
    <div
      className="flex flex-col items-start justify-center gap-y-8 rounded-md p-12 shadow-md
        hover:shadow-lg hover:-translate-y-1 transition dark:bg-slate-600
        dark:shadow-slate-800 dark:hover:shadow-slate-950 bg-zinc-50 w-1/2"
    >
      <div className="flex flex-row gap-x-4 items-center">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>

      <p className="font-regular text-lg line-clamp-3">{description}</p>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-wrap gap-4">{tagElements}</div>
        <Link href={`/posts/${slug}`}>
          <Button
            styleProps="hover:text-violet-400 shadow-violet-100"
            disabled={false}
            onClick={() => console.log('clicked')}
          >
            details...
          </Button>
        </Link>
      </div>
    </div>
  );
}
