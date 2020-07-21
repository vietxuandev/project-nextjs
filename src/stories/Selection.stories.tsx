import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Selection from '../components/Selection';
import Background from '../components/Background';

export default {
  title: 'Selection',
  decorators: [withKnobs],
};
const items = [
  { id: '1', name: 'topic', value: 'Prevention' },
  { id: '2', name: 'topic', value: 'Symptoms' },
  { id: '3', name: 'topic', value: 'Diagnosis' },
];
// Knobs for React props
export const withoutBackground: React.SFC = () => <Selection items={items} />;
export const withBackground: React.SFC = () => (
  <Background>
    <Selection items={items} />
  </Background>
);
