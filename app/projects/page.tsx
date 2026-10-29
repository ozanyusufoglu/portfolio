import React from 'react';
import dynamic from 'next/dynamic';
import Section from '@/components/Section';
import { projects } from '@/util/data';

const ProjectPreview = dynamic(() => import('@/components/ProjectPreview'));

export default async function Projects() {
  const indieProjectPreviews = projects
    .filter((project) => project.personal)
    .map((project, index) => (
      <React.Fragment key={project.title}>
        <ProjectPreview {...project} index={index} />
      </React.Fragment>
    ));

  return (
    <Section className="flex gap-12 flex-col w-full xl:w-2/3 mx-auto">
      <div className="flex flex-col gap-x-20 gap-y-12 justify-center items-center">
        <h1 className="text-2xl font-bold self-start">Indie Projects</h1>
        {indieProjectPreviews}
      </div>
    </Section>
  );
}
