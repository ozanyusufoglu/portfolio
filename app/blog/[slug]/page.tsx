import { getPostDataBySlug } from '@/util/getPostDataBySlug';
import Button from '@/components/Button';

export default async function PostPage({ params }) {
  const components = { Button };
  const { slug } = params;

  const { mdxContent } = await getPostDataBySlug(slug);
  const MDXPost = (await import(`@/markdown/${slug}.mdx`)).default;
  return (
    <div>
      {/* <button
        className="fixed left-60 top-60 transition hover:scale-105 active:scale-100 cursor-pointer
          flex flex-col border-2 gap-4 prose-p:m-0 items-center"
      >
        <p className="text-3xl hover:drop-shadow-lg rounded-full">🧠</p>
        <p className="text-sm">Share</p>
      </button> */}
      <MDXPost />
    </div>

    // <MDXRemote
    //   source={mdxContent}
    //   components={components}
    // />
  );
}
