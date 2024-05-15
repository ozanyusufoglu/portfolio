import React from 'react';
import Section from '@/components/Section';
import WorkExperienceLite from '@/components/WorkExperienceLite';
import { experiences } from '@/util/data';
import ProjectPreview from '@/components/ProjectPreview';

export default async function Experience() {
  const rdProjectElements = experiences[4].projects.map((project, index) => {
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
    <Section className="flex gap-y-12 flex-col w-screen justify-center xl:w-2/3 lg:mx-auto xl:mt-52 p-4">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold p-4">Work</p>

        {jobs}
        <p className="text-xl font-semibold p-4">Trainings</p>
        {trainings}
      </div>

      <div>
        {rdProjectElements ? (
          <p className="font-semibold text-xl mb-4 p-4">R&D Projects</p>
        ) : null}
        <div className="flex flex-col gap-y-4">{rdProjectElements}</div>
      </div>
    </Section>
  );
}
