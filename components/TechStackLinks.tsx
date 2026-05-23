import { FaReact } from 'react-icons/fa6';
import { TbBrandFirebase, TbBrandNextjs } from 'react-icons/tb';
import {
  SiOpenai,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiAnthropic,
} from 'react-icons/si';

import { techs } from '@/util/data';

export default function TechStackList() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <p className="self-center font-bold">Techs I use</p>
      <div className="flex flex-row justify-center flex-wrap gap-8 text-lg">
        <p className="flex flex-row gap-2 items-center rounded-full bg-zinc-100 px-4 p-2">
          React <FaReact className="inline" />
        </p>
        <p className="flex flex-row gap-2 items-center rounded-full bg-zinc-100 px-4 p-2">
          Typescript <SiTypescript className="inline " />
        </p>
        <p className="flex flex-row gap-2 items-center rounded-full bg-zinc-100 px-4 p-2">
          Next.js <TbBrandNextjs className="inline" />
        </p>
        <p className="flex flex-row gap-2 items-center rounded-full bg-zinc-100 px-4 p-2">
          Tailwind <SiTailwindcss className="inline" />
        </p>
        <p className="flex flex-row gap-2 items-center rounded-full bg-zinc-100 px-4 p-2">
          Firebase <TbBrandFirebase className="inline" />
        </p>
        <p className="flex flex-row gap-2 items-center rounded-full bg-zinc-100 px-4 p-2">
          OpenAI <SiOpenai className="inline" />
        </p>
        <p className="flex flex-row gap-2 items-center rounded-full bg-zinc-100 px-4 p-2">
          Framer Motion <SiFramer className="inline" />
        </p>
        <p className="flex flex-row gap-2 items-center rounded-full bg-zinc-100 px-4 p-2">
          Anthropic <SiAnthropic className="inline" />
        </p>
      </div>
    </div>
  );
}
