import { FaReact } from 'react-icons/fa6';
import { TbBrandFirebase, TbBrandNextjs } from 'react-icons/tb';
import { SiOpenai } from 'react-icons/si';

export function TechStackList() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p>Techstack</p>
      <p>
        My current tech stack is React <FaReact className="inline" />, Firebase
        <TbBrandFirebase className="inline" />, Nextjs
        <TbBrandNextjs className="inline" />
      </p>
      <div className="flex flex-row gap-4 text-lg">
        <p>
          <FaReact />
        </p>
        <p>
          <TbBrandFirebase />
        </p>
        <p>
          <TbBrandNextjs />
        </p>
        <p>
          <SiOpenai />
        </p>
      </div>
    </div>
  );
}
