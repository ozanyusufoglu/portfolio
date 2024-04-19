import fs, { readFile, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

export default async function getPostsDa() {
  const postsFolder = 'md/';
  const postFiles = fs.readdirSync(postsFolder);

  // filter mdx files, if there are any
  const mdxPosts = postFiles.filter((file) =>
    file.endsWith('.mdx')
  );

  const contentArray = mdxPosts.map((file) => {
    const rawFileContent = readFileSync(
      `md/${file}`,
      'utf8'
    );

    const { data, content } = matter(
      rawFileContent
    );

    console.log(data);

    return { ...data, body: content };
  });

  console.log(contentArray);
  return contentArray;
}
