import Link from 'next/link';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="w-full max-w-2xl mx-auto px-6 py-24 flex flex-col gap-y-12">
      <Link
        href="/blog"
        className="text-sm text-gray-400 hover:text-gray-700 transition w-fit"
      >
        ← Blog
      </Link>
      <div className="prose prose-slate dark:prose-invert antialiased">
        {children}
      </div>
    </article>
  );
}
