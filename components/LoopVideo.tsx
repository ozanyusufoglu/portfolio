'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useReducedMotion } from 'framer-motion';
import cn from '@/util/cn';

export type loopVideo = {
  mp4: string;
  poster: StaticImageData;
};

type loopVideoProps = loopVideo & {
  title: string;
  sizes?: string;
  // renders nothing (not even the still) unless this media query matches,
  // so a hidden copy never downloads on screens that do not show it
  media?: string;
  className?: string;
};

// Muted product loop over a lazy, optimized still. The video only downloads and
// plays while on screen, and never for reduced-motion or data-saver visitors.
export default function LoopVideo({ mp4, poster, title, sizes, media, className }: loopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(!media);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!media) return;
    const query = window.matchMedia(media);
    const update = () => setShown(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, [media]);

  // decided on the client so the server render is always the still alone
  useEffect(() => {
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;
    setEnabled(!reduceMotion && !saveData);
  }, [reduceMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [enabled, shown]);

  if (!shown) return null;

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image src={poster} alt={`${title} in use`} sizes={sizes} className="block w-full h-auto" />
      {enabled ? (
        <video
          ref={videoRef}
          src={mp4}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            playing ? 'opacity-100' : 'opacity-0'
          )}
        />
      ) : null}
    </div>
  );
}
