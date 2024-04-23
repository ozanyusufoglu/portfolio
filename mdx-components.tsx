import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    // here the regular img element is replaced with the next/Image component and it's props
    // this enables next/Image comp. globally when you use [image](url) tag inside your mdx file
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
