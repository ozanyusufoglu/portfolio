import React from 'react';
import Section from '../../components/Section';
import Test from '../blog/test.mdx';

export default function About() {
  return (
    <Section styleProps="flex flex-col items-center justify-center">
      <Test />
    </Section>
  );
}
