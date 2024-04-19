import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  styleProps: string;
};

export default function Button({
  children,
  styleProps,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`rounded border-2 border-slate-900 p-4 font-bold
      uppercase shadow-brutal shadow-red-400 transition
      duration-200 ease-out hover:translate-y-1
      text-nowrap hover:shadow-brutalHover
      dark:bg-slate-600 dark:shadow-slate-900
      dark:hover:shadow-slate-950 dark:text-slate-100
      ${styleProps}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
