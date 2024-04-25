import { getPostBySlug, getAllPostsSlug } from '@/util/getPostsMetadata';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';
import Monkey from '@/components/monkey';

// export async function generateStaticParams() {
//   return getAllPostsSlug();
// }

export default async function PostPage({ params }) {
  const components = { Button, Monkey };
  const { slug } = params;

  const targetPost = await getPostBySlug(slug);

  return (
    <MDXRemote
      source={targetPost.body}
      components={components}
    />
  );
}
