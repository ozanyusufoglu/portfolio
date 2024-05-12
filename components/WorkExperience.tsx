import ProjectPreview from './ProjectPreview';
import React from 'react';
import cn from '@/util/cn';

export type experienceProps = {
  companyName: string;
  description: string;
  projects?: {}[];
  dates: string;
  position: string;
  link: string;
};

export default function WorkExperience({
  companyName,
  description,
  projects,
  dates,
  position,
  link,
}: experienceProps) {
  // const projectElements = projects?.map((project, index) => {
  //   return (
  //     <React.Fragment key={index}>
  //       <ProjectPreview {...project} />
  //     </React.Fragment>
  //   );
  // });

  return (
    <div
      className={cn(
        // component base
        'flex flex-col gap-y-4 rounded-md p-8 relative bg-gray-50',
        // dark
        ' dark:bg-gray-700 dark:text-gray-50'
        // hover
        // ' hover:bg-gray-100'
      )}
    >
      <div className="flex flex-row items-center gap-x-8">
        <div className=" w-full">
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-bold ">{companyName}</h3>
            <a
              href={link}
              target="_blank"
              className="cursor-pointer text-xl"
            >
              {/* <TbWorldWww /> */}
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-100">{position}</p>
        </div>
        <span className="text-gray-500 dark:text-gray-200 absolute -left-44 text-right w-40 ">
          {dates}
        </span>
      </div>

      <p>{description}</p>
      <div className="flex flex-col">
        {projects ? <p className="font-bold mt-12">Projects</p> : null}
        {/* {projectElements} */}
      </div>
    </div>
  );
}
