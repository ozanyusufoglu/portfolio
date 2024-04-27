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
    <Section styleProps="gap-20 lg:flex-row items-center">
      <h1>Projects</h1>
      <div className="flex flex-col gap-x-20 gap-y-12 justify-center items-center">
        {projectPreviews}
      </div>
    </Section>
  );
}
