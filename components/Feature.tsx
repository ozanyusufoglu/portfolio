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
        justify-center gap-x-8 border-2 border-gray-200
        p-20 sm:flex-row"
    >
      <Image
        src={src}
        width={400}
        height={400}
        alt={alt}
      />
      <div className="flex flex-col gap-y-4 ">
        <h3 className="text-lg font-bold">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
