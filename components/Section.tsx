import React, { ReactNode } from 'react';
import cn from '@/util/cn';
type sectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};
export default function Section({ id, children, className }: sectionProps) {
  return (
    <section
      id={id}
      className={cn('w-full p-8 animate-enter', className)}
    >
      {children}
    </section>
  );
}
