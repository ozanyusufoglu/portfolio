'use client';
import Link from 'next/link';
import Button from './Button';

export type postPreviewProps = {
  title: string;
  slug: string;
  icon?: string;
  cover?: string;
  previewItems?: string;
  mdxContent?: any;
};
export default function PostPreview({
  title,
  slug,
  icon,
  cover,
  previewItems,
}: postPreviewProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div
        className="flex w-full flex-col items-start justify-center gap-4 rounded-lg border-2 prose:
          prose-p:no-underline decoration-slate-50 prose-p:m-0 prose-h2:m-0
          prose-h2:no-underline border-neutral-300 border-solid p-6 border-transparent
          hover:shadow-brutalHover bg-white hover:border-black hover:-translate-y-1
          transition dark:bg-slate-600 dark:shadow-slate-800 dark:hover:shadow-slate-950"
      >
        <div className="flex flex-row items-center">
          {/* <p
            className="text-3xl border-0 border-slate-950 rounded-full bg-white w-12 h-12 flex
              prose-neutral items-center justify-center"
          >
            {icon}
          </p> */}
          <h2 className="text-2xl font-medium">{title}</h2>
        </div>

        <p className="font-light text-lg line-clamp-6">{previewItems}</p>
        {/* <ul className="flex flex-col items-start gap-y-4">
        {previewItems.map(
          (item: string, index: number) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul> */}

        {/* <Button
          className="bg-red-50 hover:text-red-400 shadow-red-100"
          disabled={false}
          onClick={() => console.log('clicked')}
        >
          Read more
        </Button> */}
      </div>
    </Link>
  );
}
