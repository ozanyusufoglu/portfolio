import cn from '@/util/cn';

// with interface instead of type, no need to explictly decleare children

// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type buttonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  className,
  disabled,
  onClick,
}: buttonProps) {
  return (
    <button
      className={cn(
        // base
        'rounded border-2 border-slate-900 p-4 font-bold uppercase shadow-gray-400',

        'transition duration-200 ease-out text-nowrap',

        'active:shadow-brutalActive active:translate-y-[2px] ',

        // hover
        'hover:shadow-brutalHover hover:-translate-y-1 ',
        // dark
        `dark:bg-zinc-800 dark:shadow-zinc-950 dark:hover:shadow-zinc-950
        dark:text-zinc-100 dark:border-zinc-600`,

        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
