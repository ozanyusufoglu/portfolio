import { techs } from '@/util/data';

export default function TechStackList() {
  return (
    <div className="flex flex-col gap-8 items-start">
      <p className="font-bold">Techs I use</p>
      <div className="flex flex-row flex-wrap gap-4 text-lg">
        {techs.map(({ title, SVG }) => (
          <p
            key={title}
            className="flex flex-row gap-2 items-center rounded-full bg-zinc-100 px-4 p-2"
          >
            {title} <SVG className="inline" />
          </p>
        ))}
      </div>
    </div>
  );
}
