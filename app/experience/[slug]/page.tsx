import { getPostBySlug } from '@/util/getPostsMetadata';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';

export default async function PostPage({ params }) {
  const { slug } = params;

  const targetPost = await getPostBySlug(slug);

  const components = { Button };
  // it already returns the content as a react component bcs of compileMDX
  return (
    <MDXRemote
      source={targetPost.body}
      components={components}
    />
  );
}