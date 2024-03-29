import { CssVariable } from 'next/dist/compiled/@next/font';
import React, { ReactEventHandler } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
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
      className={`rounded ${styleProps} border-2 border-slate-900
      p-4 font-bold uppercase shadow-brutal
      shadow-purple-400 transition-all duration-200
      ease-out hover:translate-y-1 text-nowrap
      hover:shadow-brutalHover dark:text-purple-800`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
