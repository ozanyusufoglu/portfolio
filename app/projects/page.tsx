import React, { ReactDOM, ReactElement } from 'react';
import Section from '@/components/Section';
import ProjectPreview from '@/components/ProjectPreview';
import { projects } from '@/util/data';

export default async function Projects() {
  const indieProjectPreviews = projects.map((project, index) => {
    return project.personal ? (
      <React.Fragment key={index}>
        <ProjectPreview {...project} />
      </React.Fragment>
    ) : null;
  });

  const workProjectPreviews = projects.map((project, index) => {
    return !project.personal ? (
      <React.Fragment key={index}>
        <ProjectPreview {...project} />
      </React.Fragment>
    ) : null;
  });

  const yenihayat = projects.map((project, index) => {
    return project.company === 'Yenihayat Informatics' ? (
      <React.Fragment key={index}>
        <ProjectPreview {...project} />
      </React.Fragment>
    ) : null;
  });

  const isoolate = projects.map((project, index) => {
    return project.company === 'Isoolate' ? (
      <React.Fragment key={index}>
        <ProjectPreview {...project} />
      </React.Fragment>
    ) : null;
  });

  const protel = projects.map((project, index) => {
    return project.company === 'protel' ? (
      <React.Fragment key={index}>
        <ProjectPreview {...project} />
      </React.Fragment>
    ) : null;
  });

  return (
    <Section styleProps="flex gap-24 flex-col w-screen xl:w-2/3 lg:mx-auto">
      <div className="flex flex-col gap-x-20 gap-y-12 justify-center items-center">
        <h1 className="text-4xl font-bold self-start">Indie Projects</h1>
        {indieProjectPreviews}
      </div>
      <h1 className="text-4xl font-bold">Professional</h1>
      <div className="flex flex-col gap-8">
        <WorkExperience
          companyName="Isoolate"
          projects={isoolate}
          dates="2020-2021"
        />
        <WorkExperience
          companyName="Yenihayat"
          projects={yenihayat}
          dates="2013-2020"
        />
        <WorkExperience
          companyName="Protel Turkey"
          projects={protel}
          dates="2011-2013"
        />
      </div>
    </Section>
  );
}

export function WorkExperience({
  companyName,
  projects,
  dates,
}: {
  companyName: string;
  projects: React.JSX.Element[];
  dates: string;
}) {
  return (
    <div className="flex flex-col gap-x-20 gap-y-4">
      <h3 className=" self-start font-bold text-2xl">{companyName}</h3>

      <h4 className="flex flex-row items-end gap-4">
        <span className="text-gray-700">R&D Manager</span>
        <span className="text-gray-500">(2013-2020)</span>
      </h4>
      {projects}
    </div>
  );
}
