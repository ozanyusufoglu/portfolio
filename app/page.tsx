import Projects from './projects/page';
import Hero from '@/components/Hero';
import resume from '@/content/resume.json';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero about={resume.basics.about} />
      <Projects />
    </main>
  );
}
