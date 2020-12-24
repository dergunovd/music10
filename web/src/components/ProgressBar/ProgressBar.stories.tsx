import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { ProgressBar, ProgressBarProps } from './ProgressBar';
import { PROGRESS } from '../../mocks';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template = (props: ProgressBarProps) => <ProgressBar {...props} />;

export const Default = Template.bind({
  progress: PROGRESS,
  isSelectTrack: false,
});
/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
Default.args = { progress: PROGRESS, isSelectTrack: false };

export const SelectTrack = Template.bind({
  progress: PROGRESS,
  isSelectTrack: true,
});
/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
SelectTrack.args = { progress: PROGRESS, isSelectTrack: true };

export const Vertical = Template.bind({
  vertical: true,
  progress: PROGRESS,
  isSelectTrack: false,
});
/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
Vertical.args = { progress: PROGRESS, vertical: true, isSelectTrack: false };
