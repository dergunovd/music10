import React from "react";

import { Track } from "./Track";
import { TrackCardVariant, TrackProps } from "./Track.types";

export default {
  title: "Components/Track",
  component: Track,
};

const Template = (props: TrackProps) => <Track {...props} />;

export const Default = Template.bind({
  type: TrackCardVariant.Default,
  author: "Centr",
  track: "Город Дорог",
});
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore
Default.args = {
  type: TrackCardVariant.Default,
  author: "Centr",
  track: "Город Дорог",
};

export const Success = Template.bind({
  type: TrackCardVariant.Success,
  author: "Centr",
  track: "Город Дорог",
});
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore
Success.args = {
  type: TrackCardVariant.Success,
  author: "Centr",
  track: "Город Дорог",
};

export const Wrong = Template.bind({
  type: TrackCardVariant.Wrong,
  author: "Centr",
  track: "Город Дорог",
});
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore
Wrong.args = {
  type: TrackCardVariant.Wrong,
  author: "Centr",
  track: "Город Дорог",
};
