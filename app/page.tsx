import Image from 'next/image';
import Posts from './posts/page';
import Feature from '../components/Feature';
import Section from '../components/Section';
import Hero from '@/components/Hero';
import { features } from '@/lib/data';
import { links } from '@/lib/data';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Section
        styleProps="flex flex-auto flex-col items-center
          justify-center gap-x-20"
      >
        <Hero />
      </Section>

      <Posts />

      <Section styleProps="flex flex-col gap-y-8">
        {features.map((item, index) => {
          return (
            <Feature
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </Section>
    </main>
  );
}
