import { getPostBySlug } from '@/util/getPostsMetadata';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Monkey from '@/components/monkey';
import Button from '@/components/Button';

export default async function PostPage({ params }) {
  const { slug } = params;

  const targetPost = await getPostBySlug(slug);

  console.log(targetPost.title);
  const components = { Button, Monkey };
  // it already returns the content as a react component bcs of compileMDX
  return (
    <MDXRemote
      source={targetPost.body}
      components={components}
    />
  );
}
