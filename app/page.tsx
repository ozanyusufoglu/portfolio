import Projects from './projects/page';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import resume from '@/content/resume.json';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero about={resume.basics.about} />
      <Projects />
      {/* same column as the projects above (app/projects/page.tsx); the Work nav link scrolls here */}
      <Experience id="work" className="w-full xl:w-2/3 mx-auto" />
    </main>
  );
}
