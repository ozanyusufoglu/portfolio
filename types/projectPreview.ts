import { StaticImageData } from 'next/image';

export type projectPreviewProps = {
  title: string;
  description: string;
  slug: string;
  personal?: boolean;
  link?: string | null;
  dates?: string | null;
  company?: string | null;
  position?: string | null;
  misc?: string | null;
  duration?: string | null;
  icon?: string | null;
  body: string | null;
  previewItems?: readonly string[] | null;
  imageUrl?: StaticImageData | string | null;
  tags: readonly string[] | null;
  tools: readonly string[] | null;
};
