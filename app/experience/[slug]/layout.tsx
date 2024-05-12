import Section from '@/components/Section';
import Image from 'next/image';
import Button from '@/components/Button';

export default function MdxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  return (
    <article
      className="min-h-screen my-48 flex flex-col items-center
        gap-y-16"
    >
      <div className="relative">
        <div className="absolute -left-24 top-20">
          <p
            className="text-3xl hover:-translate-y-1 opacity-90
              hover:opacity-100 cursor-pointer transition
              hover:drop-shadow-lg"
          >
            🍅
          </p>
          <p className="text-gray-500 text-md">
            x 12
          </p>
        </div>
        <div className="prose prose-slate dark:prose-invert antialiased">
          {children}
        </div>
      </div>
    </article>
  );
}
