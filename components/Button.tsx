import React from 'react';
import { buttonProps } from '@/app/types/button';
// with interface instead of type, no need to explictly decleare children

export default function Button({
  children,
  styleProps,
  disabled,
  onClick,
}: buttonProps) {
  return (
    <button
      className={`rounded border-2 border-slate-900 p-4 font-bold uppercase shadow-gray-400
      transition duration-200 ease-out hover:-translate-y-1 text-nowrap
      hover:shadow-brutalHover dark:bg-slate-600 dark:shadow-slate-900
      dark:hover:shadow-slate-950 dark:text-slate-100 ${styleProps}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
