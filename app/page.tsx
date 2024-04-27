import Projects from './projects/page';
import Feature from '../components/Feature';
import Section from '../components/Section';
import Hero from '@/components/Hero';
import { features } from '@/util/data';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Section
        styleProps="flex flex-auto flex-col items-center
          justify-center gap-x-20"
      >
        <Hero />
      </Section>
      <Projects />
    </main>
  );
}
