'use client';
import Link from 'next/link';

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
  previewItems,
}: postPreviewProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div
        className="flex w-full flex-col items-start justify-center gap-4 rounded-lg p-6
          ring-2 ring-transparent hover:ring-black hover:-translate-y-1
          bg-white hover:shadow-brutalHover transition
          dark:bg-zinc-800 dark:hover:ring-zinc-400 dark:shadow-zinc-900 dark:hover:shadow-zinc-950"
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
