import { FaReact } from 'react-icons/fa6';
import { TbBrandFirebase, TbBrandNextjs } from 'react-icons/tb';
import { SiOpenai } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

export function TechStackList() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="self-center">Tech stack I use</p>
      <div className="flex flex-row justify-center flex-wrap gap-8 text-lg md:flex-nowrap">
        <p>
          React <FaReact className="inline" />
        </p>

        <p>
          Typescript <SiTypescript className="inline" />
        </p>
        <p>
          Next.js <TbBrandNextjs className="inline" />
        </p>
        <p>
          Tailwind <SiTailwindcss className="inline" />
        </p>
        <p>
          Firebase <TbBrandFirebase className="inline" />
        </p>
        <p>
          OpenAI <SiOpenai className="inline" />
        </p>
      </div>
    </div>
  );
}
