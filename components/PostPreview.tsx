'use client';
import Link from 'next/link';
import Button from './Button';

type PostPreviewProps = {
  slug: string;
  id: number;
  title: string;
  previewItems: {}[];
};

export default function PostPreview({
  slug,
  id,
  title,
  previewItems,
}: PostPreviewProps) {
  return (
    <div
      className="flex flex-col items-start justify-center gap-4
        rounded-sm border-2 border-solid border-black p-12
        text-lg shadow-brutal lg:flex-auto"
      key={id}
    >
      <h2 className="text-2xl font-bold">
        {title}
      </h2>
      <ul className="flex flex-col items-start gap-y-4">
        {previewItems.map(
          (item: any, index: number) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
      <Link href={`/posts/${slug}`}>
        <Button
          styleProps="bg-purple-100 hover:text-purple-500"
          disabled={false}
          onClick={() => console.log('clicked')}
        >
          Read more
        </Button>
      </Link>
    </div>
  );
}
