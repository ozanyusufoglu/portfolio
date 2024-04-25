import React from 'react';
import Image, {
  StaticImageData,
} from 'next/image';

type featureProps = {
  src: StaticImageData;
  title: string;
  description: string;
  alt?: string;
  previewItems?: readonly string[];
};

export default function Feature({
  src,
  title,
  description,
  alt,
  previewItems,
}: featureProps) {
  return (
    <div
      className="items-around flex w-full flex-1 flex-col
        justify-center items-start gap-x-16 p-20
        sm:flex-row"
    >
      <Image
        className="shadow-lg p-8 rounded-lg w-[25rem] -rotate-3
          aspect-auto hover:-translate-y-2 transition
          hover:rotate-0"
        src={src}
        width={300}
        height={300}
        alt={alt}
        quality={100}

        // placeholder="blur"
      />
      <div
        className="flex flex-col gap-y-4 items-start justify-center
          w-1/2"
      >
        <h3 className="text-2xl font-bold">
          {title}
        </h3>
        <p className="text-xl">{description}</p>
        <ul>
          {previewItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
