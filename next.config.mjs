import nextMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('rehype-pretty-code').Options} */
/** @type {import('next').NextConfig} */
/** @type {import('rehype-pretty-code').Options} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const options = {
  theme: 'monokai',
  keepBackground: true,
  // onVisitHighlightedLine(node) {
  //   // Each line node by default has `class="line"`.
  //   node.properties.className?.push('highlighted');
  // },
};
const withMDX = nextMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
