import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { TracksGrid } from './TracksGrid';
import { Track } from '../Track';

export default {
  title: 'Components/TracksGrid',
  component: TracksGrid,
} as Meta;

const Template = () => (
  <TracksGrid>
    <Track author="CENTR" track="Город Дорог" type="success" />
    <Track author="Каста" track="Вокруг Шум" />
    <Track author="Guf" track="Ice Baby" />
    <Track author="N.W.A" track="Fuck Tha Police" type="wrong" />
  </TracksGrid>
);

export const Default = Template.bind({});
