import React, { ReactEventHandler } from "react";

type Color = "bg-purple-100" | "bg-red-100";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
  backgroundColor: Color;
};

export default function Button({
  children,
  backgroundColor,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`rounded ${backgroundColor} hover:shadow-brutalHover border-2 border-slate-900 p-4 font-bold uppercase shadow-brutal shadow-purple-400 
    transition-all duration-200 ease-out hover:translate-y-1`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
