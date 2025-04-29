import fs, { readFileSync } from 'fs';
import path from 'path';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import matter from 'gray-matter';
import { postPreviewProps } from '@/components/PostPreview';

const postsFolder = path.join(process.cwd(), 'markdown');

export async function getPostDataBySlug(slug: string) {
  const postName = slug + '.mdx';
  const postPath = path.join(postsFolder, postName);
  const rawPostContent = readFileSync(postPath, 'utf-8');

  const { data, content } = matter(rawPostContent);

  return {
    ...data,
    mdxContent: content,
  } as postPreviewProps;

  // const postFiles = fs.readdirSync(postsFolder);
}

export async function getPosts() {
  const files = fs.readdirSync(postsFolder);
  const posts = await Promise.all(
    files.map(async (file) => await getPostDataBySlug(path.parse(file).name))
  );

  return posts;
}

/* to create links for each slug and list it on the blog page */
export function getAllPostsSlug() {
  const files = fs.readdirSync(postsFolder);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}

// const mdxSource = await serialize(content, {
//   // parseFrontmatter: true,
//   mdxOptions: {
//     format: 'mdx',
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [
//       // rehypeSlug,
//       // [
//       //   rehypeAutolinkHeadings,
//       //   { behavior: 'wrap', properties: { className: ['anchor'] } },
//       // ],
//       [
//         rehypePrettyCode,
//         {
//           theme: {
//             dark: 'monokai',
//             light: 'one-dark-pro',
//           },
//           keepBackground: true,
//           onVisitHighlightedLine(node) {
//             // Each line node by default has `class="line"`.
//             node.properties.className?.push('highlighted');
//           },
//           onVisitHighlightedWord(node) {
//             node.properties.className = ['word-highlighted'];
//           },
//         },
//       ],
//     ],
//   },
//   scope: data,
// });

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
