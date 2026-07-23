import React from 'react';
import dynamic from 'next/dynamic';
import Section from '@/components/Section';
import { projects } from '@/util/data';

const ProjectPreview = dynamic(() => import('@/components/ProjectPreview'));

export default async function Projects() {
  const indieProjectPreviews = projects.map((project, index) => {
    return project.personal ? (
      <React.Fragment key={index}>
        <ProjectPreview {...project} />
      </React.Fragment>
    ) : null;
  });

  return (
    <Section className="flex gap-12 flex-col max-w-3xl mx-auto">
      <div className="flex flex-col gap-x-20 gap-y-12 justify-center items-center pb-12">
        <h1 className="text-2xl font-bold self-start">Indie Projects</h1>
        {indieProjectPreviews}
      </div>
    </Section>
  );
}
