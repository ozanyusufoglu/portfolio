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
      <div className="prose prose-slate dark:prose-invert antialiased">
        {children}
      </div>
    </article>
  );
}
