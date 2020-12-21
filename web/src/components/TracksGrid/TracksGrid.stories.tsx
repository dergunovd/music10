import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { TracksGrid } from './TracksGrid';
import { Track, TrackCardVariant } from '../Track';

export default {
  title: 'Components/TracksGrid',
  component: TracksGrid,
} as Meta;

const Template = () => (
  <TracksGrid>
    <Track author="CENTR" track="Город Дорог" type={TrackCardVariant.Success} />
    <Track author="Каста" track="Вокруг Шум" type={TrackCardVariant.Default} />
    <Track author="Guf" track="Ice Baby" type={TrackCardVariant.Default} />
    <Track
      author="N.W.A"
      track="Fuck Tha Police"
      type={TrackCardVariant.Wrong}
    />
  </TracksGrid>
);

export const Default = Template.bind({});
