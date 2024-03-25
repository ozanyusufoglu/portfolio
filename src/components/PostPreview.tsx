"use client";
import Link from "next/link";
import Button from "@/components/Button";

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
      className="min-w-1/5 flex h-full flex-col gap-8 rounded-sm border-2 border-solid border-black
      p-12 text-lg shadow-brutal"
      key={id}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul>
        {previewItems.map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link href={`/posts/${slug}`}>
        <Button
          backgroundColor="bg-purple-100"
          disabled={false}
          onClick={() => console.log("clicked")}
        >
          Read more
        </Button>
      </Link>
    </div>
  );
}
