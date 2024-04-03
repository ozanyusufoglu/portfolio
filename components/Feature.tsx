import React from 'react';
import Image from 'next/image';

type featureProps = {
  src: string;
  title: string;
  description: string;
  alt?: string;
};

export default function Feature({
  src,
  title,
  description,
  alt,
}: featureProps) {
  return (
    <div
      className="items-around flex w-full flex-1 flex-col
        justify-center items-center gap-x-16 p-20
        sm:flex-row"
    >
      <Image
        className="shadow-lg w-1/2 border-2 border-gray-900 p-8"
        src={src}
        width={250}
        height={250}
        alt={alt}
        quality={100}

        // placeholder="blur"
      />
      <div
        className="flex flex-col gap-y-4 items-start justify-center
          w-1/2"
      >
        <h3 className="text-3xl font-bold">
          {title}
        </h3>
        <p className="text-2xl">{description}</p>
      </div>
    </div>
  );
}
