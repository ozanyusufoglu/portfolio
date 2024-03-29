import React, { ReactNode } from 'react';

type sectionProps = {
  styleProps?: string;
  children: ReactNode;
};
export default function Section({
  children,
  styleProps,
}: sectionProps) {
  return (
    <section
      className={`min-h-screen w-screen border-b-2
      border-b-purple-200 p-20 ${styleProps}`}
    >
      {children}
    </section>
  );
}
