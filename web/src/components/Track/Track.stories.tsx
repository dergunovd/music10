import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Track, TrackProps } from './Track';

export default {
  title: 'Components/Track',
  component: Track,
} as Meta;

const Template = (props: TrackProps) => <Track {...props} />;

export const Default = Template.bind({ author: 'Centr', track: 'Город Дорог' });
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
Default.args = { type: 'success', author: 'Centr', track: 'Город Дорог' };

export const Success = Template.bind({ author: 'Centr', track: 'Город Дорог' });
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
Success.args = { type: 'success', author: 'Centr', track: 'Город Дорог' };

export const Wrong = Template.bind({ author: 'Centr', track: 'Город Дорог' });
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
Wrong.args = { type: 'wrong', author: 'Centr', track: 'Город Дорог' };
