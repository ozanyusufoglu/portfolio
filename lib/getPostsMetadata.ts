import fs, { readFile, readFileSync } from 'fs';
import matter from 'gray-matter';
import { cache } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';

const getPostsMetaData = cache(async () => {
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

    //     const { frontmatter, content } = await compileMDX({
    // source: rawFileContent,
    // options: { parseFrontmatter: true }}
    // )

    return { ...data, body: content };
  });

  return contentArray;
});

export default getPostsMetaData;

// export async function getPost(slug: string) {
//   const post = posts.find(
//     (item) => item.slug === slug
//   );
// }
