import fs, { readFileSync } from 'fs';
import path from 'path';
import { cache } from 'react';
import matter from 'gray-matter';
import { postPreviewProps } from '@/components/PostPreview';

const postsFolder = path.join(process.cwd(), 'markdown');

export async function getPostBySlug(slug: string) {
  const postName = slug + '.mdx';
  const postPath = path.join(postsFolder, postName);
  const rawPostContent = readFileSync(postPath, 'utf-8');

  const { data, content } = matter(rawPostContent);

  // another method is to use compileMdx
  // in this method, "content" returns as an already parsed  React component rather than rawstring

  // const { frontmatter, content } = await compileMDX<{
  //   title: string;
  //   slug: string;
  //   icon?: string;
  //   cover?: string;
  //   previewItems?: string;
  // }>({
  //   source: rawPostContent,
  //   options: { parseFrontmatter: true },
  // });

  // console.log(frontmatter);

  return {
    ...data,
    body: content,
    // slug: path.parse(postPath).name,
  } as postPreviewProps;

  // const postFiles = fs.readdirSync(postsFolder);
}

export async function getPosts() {
  const files = fs.readdirSync(postsFolder);
  const posts = await Promise.all(
    files.map(async (file) => await getPostBySlug(path.parse(file).name))
  );

  return posts;
}

export function getAllPostsSlug() {
  const files = fs.readdirSync(postsFolder);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}
