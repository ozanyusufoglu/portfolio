import React, { ReactNode } from "react";

type sectionProps = {
  children: ReactNode;
};
export default function Section({ children }: sectionProps) {
  return (
    <div className="p-x-20 flex h-screen flex-col items-center justify-center border-b-2 border-b-purple-200">
      {children}
    </div>
  );
}
