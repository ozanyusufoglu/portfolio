import React from 'react';
import dynamic from 'next/dynamic';
import Section from '@/components/Section';
import WorkExperienceLite from '@/components/WorkExperienceLite';
import { experiences, contractedProjects } from '@/util/data';
import cn from '@/util/cn';

const ProjectPreview = dynamic(() => import('@/components/ProjectPreview'));

// rows and cards carry their own p-4, so the lists bleed out by that much:
// their text then lines up with the headings and the hover highlight overhangs
const listClassName = 'flex flex-col gap-y-4 -mx-4';
const headingClassName = 'text-2xl font-bold mb-4';

// shared by /work (its own narrower column) and the home page (the projects column),
// so the column is the caller's choice
export default function Experience({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
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
    <Section id={id} className={cn('flex gap-y-12 flex-col justify-center', className)}>
      <div>
        <h2 className={headingClassName}>Experience</h2>
        <div className={listClassName}>{jobs}</div>
      </div>

      <div>
        <h2 className={headingClassName}>Contracted Work</h2>
        <div className={listClassName}>{contractedProjectElements}</div>
      </div>

      <div>
        {rdProjectElements.length ? (
          <h2 className={headingClassName}>R&D Projects</h2>
        ) : null}
        <div className={listClassName}>{rdProjectElements}</div>
      </div>

      {/* hidden for now; the trainings list above is kept so this can come back
      <div>
        <h2 className={headingClassName}>Trainings</h2>
        <div className={listClassName}>{trainings}</div>
      </div>
      */}
    </Section>
  );
}
