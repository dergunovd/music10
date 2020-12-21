import React from "react";

import {
  ProgressBarItem,
  ProgressBarItemProps,
  ProgressBarItemVariant,
} from "./ProgressBarItem";

export default {
  title: "Components/ProgressBar/ProgressBarItem",
  component: ProgressBarItem,
};

const Template = (props: ProgressBarItemProps) => (
  <ProgressBarItem {...props} />
);

export const Default = Template.bind({
  variant: ProgressBarItemVariant.Default,
});
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore
Default.args = { variant: ProgressBarItemVariant.Default };

export const Success = Template.bind({
  variant: ProgressBarItemVariant.Success,
});
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore
Success.args = { variant: ProgressBarItemVariant.Success };

export const Wrong = Template.bind({ variant: ProgressBarItemVariant.Wrong });
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore
Wrong.args = { variant: ProgressBarItemVariant.Wrong };

export const Current = Template.bind({
  variant: ProgressBarItemVariant.Current,
});
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore
Current.args = { variant: ProgressBarItemVariant.Current };
