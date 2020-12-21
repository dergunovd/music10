import React from 'react';

import {ProgressBar, ProgressBarProps} from './ProgressBar';
import {PROGRESS} from '../../mocks';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
};

const Template = (props: ProgressBarProps) => <ProgressBar {...props} />;

export const Default = Template.bind({progress: PROGRESS});
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
Default.args = {progress: PROGRESS};

export const Vertical = Template.bind({vertical: true, progress: PROGRESS});
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
Vertical.args = {progress: PROGRESS, vertical: true};
