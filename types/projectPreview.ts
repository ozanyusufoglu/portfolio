import { StaticImageData } from 'next/image';

export type projectPreviewProps = {
  title: string;
  description: string;
  slug: string;
  personal?: boolean;
  link?: string;
  dates?: string;
  company?: string;
  misc?: string;
  duration?: string;
  icon?: string;
  body: string;
  previewItems?: readonly string[];
  tags: readonly string[];
  imageUrl?: StaticImageData;
};
