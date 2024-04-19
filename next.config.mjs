// const withMDX = require('@next/mdx')();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: [
//     'js',
//     'jsx',
//     'mdx',
//     'ts',
//     'tsx',
//   ],
//   // Optionally, add any other Next.js config below
// };

// module.exports = withMDX(nextConfig);

import nextMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
});

export default withMDX({
  pageExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'md',
    'mdx',
  ],
});
