import React from 'react';
import Section from '../../components/Section';
import Content from './content.mdx';

export default function About() {
  return (
    <Section styleProps="prose text-lg">
      <Content />
    </Section>
  );
}
