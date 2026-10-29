import React from 'react';
import dynamic from 'next/dynamic';
import Section from '@/components/Section';
import WorkExperienceLite from '@/components/WorkExperienceLite';
import { experiences, contractedProjects } from '@/util/data';

const ProjectPreview = dynamic(() => import('@/components/ProjectPreview'));

export default async function Experience() {
  const rdProjects =
    experiences.find((item) => item.company === 'Yenihayat Informatics')
      ?.projects ?? [];

  const rdProjectElements = rdProjects.map((project, index) => {
    return (
      <React.Fragment key={index}>
        <ProjectPreview {...project} />
      </React.Fragment>
    );
  });

  const contractedProjectElements = contractedProjects.map((project, index) => {
    return (
      <React.Fragment key={index}>
        <ProjectPreview {...project} />
      </React.Fragment>
    );
  });

  const jobs = experiences.map((item, index) => {
    if (item.type === 'work')
      return (
        <React.Fragment key={index}>
          <WorkExperienceLite
            companyName={item.company}
            description={item.description}
            projects={item.projects}
            dates={item.dates}
            position={item.position}
            link={item.link}
          />
        </React.Fragment>
      );
  });

  const trainings = experiences.map((item, index) => {
    if (item.type === 'training')
      return (
        <React.Fragment key={index}>
          <WorkExperienceLite
            companyName={item.company}
            description={item.description}
            projects={item.projects}
            dates={item.dates}
            position={item.position}
            link={item.link}
          />
        </React.Fragment>
      );
  });

  return (
    <Section className="flex gap-y-12 flex-col justify-center max-w-3xl mx-auto sm:mt-24 p-4">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold p-4">Experience</p>

        {jobs}
      </div>

      <div>
        <p className="font-semibold text-xl mb-4 p-4">Contracted Work</p>
        <div className="flex flex-col gap-y-4">{contractedProjectElements}</div>
      </div>

      <div>
        {rdProjectElements ? (
          <p className="font-semibold text-xl mb-4 p-4">R&D Projects</p>
        ) : null}
        <div className="flex flex-col gap-y-4">{rdProjectElements}</div>
      </div>

      {/* hidden for now; the trainings list above is kept so this can come back
      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold p-4">Trainings</p>
        {trainings}
      </div>
      */}
    </Section>
  );
}
