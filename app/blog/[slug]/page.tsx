import { getPostBySlug, getAllPostsSlug } from '@/util/getPostsMetadata';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';

export async function generateStaticParams() {
  return getAllPostsSlug();
}
export default async function PostPage({ params }) {
  const components = { Button };
  const { slug } = params;

  const slugs = await generateStaticParams();

  const targetPost = await getPostBySlug(slug);

  return (
    <MDXRemote
      source={targetPost.body}
      components={components}
    />
  );
}
