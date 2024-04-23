// const withMDX = require('@next/mdx')();

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

// /** @type {import('next').NextConfig} */
// import nextMDX from '@next/mdx';
// import remarkFrontmatter from 'remark-frontmatter';

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkFrontmatter],
//     rehypePlugins: [],
//   },
// });

// export default withMDX({
//   pageExtensions: [
//     'ts',
//     'tsx',
//     'js',
//     'jsx',
//     'md',
//     'mdx',
//   ],
// });

import remarkFrontmatter from 'remark-frontmatter';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: [
    'js',
    'jsx',
    'md',
    'mdx',
    'ts',
    'tsx',
  ],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
