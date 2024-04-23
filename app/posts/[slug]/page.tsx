import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import getPostsMetaData from '@/lib/getPostsMetadata';

export default async function PostPage({
  params,
}) {
  const { slug } = params;

  const posts = await getPostsMetaData();

  console.log(posts);
  const targetPost = posts.find(
    (post) => post.slug == slug
  );

  return <MDXRemote source={targetPost.body} />;
}
