import Projects from './projects/page';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Projects />
    </main>
  );
}
