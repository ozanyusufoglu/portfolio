import { techs } from '@/util/data';

export default function TechStackList() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="">My tech stack</p>
      <div className="flex flex-row flex-wrap gap-4 text-sm">
        {techs.map(({ title, SVG }) => (
          <p
            key={title}
            className="flex flex-row gap-1.5 items-center rounded-full bg-zinc-100 px-4 py-1.5
              dark:bg-zinc-800"
          >
            <SVG className="inline" /> {title}
          </p>
        ))}
      </div>
    </div>
  );
}
