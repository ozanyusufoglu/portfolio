import { techs } from '@/util/data';

export default function TechStackList() {
  return (
    <div className="flex flex-col gap-4 sm:items-start justify-center items-center">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
        My tech stack
      </p>
      <ul
        className="flex flex-row w-full gap-4 mt-4 text-sm flex-wrap sm:justify-start
          justify-center"
      >
        {techs.map(({ title, SVG }) => (
          <li
            key={title}
            className="flex flex-row gap-1.5 items-center whitespace-nowrap rounded-full bg-zinc-100
              px-3 py-1.5 dark:bg-zinc-800"
          >
            <SVG className="inline shrink-0" aria-hidden="true" />{' '}
            <span translate="no">{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
