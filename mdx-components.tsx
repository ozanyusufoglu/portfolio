import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Button from '@/components/Button';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // here the regular img element is replaced with the next/Image component and it's props
    // this enables next/Image comp. globally when you use [image](url) tag inside your mdx file

    ...components,
  };
}
