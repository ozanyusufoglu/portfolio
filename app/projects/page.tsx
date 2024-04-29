import React from 'react';
import Section from '@/components/Section';
import ProjectPreview from '@/components/ProjectPreview';
import { projects } from '@/util/data';

export default async function Projects() {
  const projectPreviews = projects.map((project, index) => {
    return (
      <React.Fragment key={index}>
        <ProjectPreview {...project} />
      </React.Fragment>
    );
  });

  return (
    <Section styleProps="gap-20 lg:flex-row mx-auto">
      <div className="flex flex-col gap-x-20 gap-y-12 justify-center items-center">
        <h1 className="text-2xl font-bold">Indie Projects</h1>
        {projectPreviews}
      </div>
    </Section>
  );
}
