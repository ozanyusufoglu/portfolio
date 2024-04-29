'use client';
import Link from 'next/link';
import Button from './Button';
import { postPreviewProps } from '@/types/postPreview';

export default function PostPreview({
  title,
  slug,
  icon,
  cover,
  previewItems,
}: postPreviewProps) {
  return (
    <div
      className="flex max-w-screen flex-col items-start justify-center gap-y-8 rounded-md
        border-2 border-solid border-black p-12 shadow-brutal hover:shadow-brutalHover
        bg-white max-w-sm hover:translate-y-1 transition dark:bg-slate-600
        dark:shadow-slate-800 dark:hover:shadow-slate-950"
    >
      <div className="flex gap-x-4 items-center">
        <p
          className="text-3xl border-2 border-slate-950 rounded-full bg-white w-12 h-12 flex
            items-center justify-center"
        >
          {icon}
        </p>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <p className="font-regular text-lg line-clamp-6 ">{previewItems}</p>
      {/* <ul className="flex flex-col items-start gap-y-4">
        {previewItems.map(
          (item: string, index: number) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul> */}
      <Link href={`/blog/${slug}`}>
        <Button
          styleProps="bg-red-50 hover:text-red-400 shadow-red-100"
          disabled={false}
          onClick={() => console.log('clicked')}
        >
          Read more
        </Button>
      </Link>
    </div>
  );
}
