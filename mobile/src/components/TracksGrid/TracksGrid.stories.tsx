import React from "react";

import { TracksGrid } from "./TracksGrid";
import { Track } from "../Track";
import { TrackCardVariant } from "../Track/Track.types";

export default {
  title: "Components/TracksGrid",
  component: TracksGrid,
};

const Template = () => (
  <TracksGrid>
    <Track
      author="CENTR"
      track="Город Дорог"
      type={TrackCardVariant.Success}
      onPress={() => void 0}
    />
    <Track
      author="Каста"
      track="Вокруг Шум"
      type={TrackCardVariant.Default}
      onPress={() => void 0}
    />
    <Track
      author="Guf"
      track="Ice Baby"
      type={TrackCardVariant.Default}
      onPress={() => void 0}
    />
    <Track
      author="N.W.A"
      track="Fuck Tha Police"
      type={TrackCardVariant.Wrong}
      onPress={() => void 0}
    />
  </TracksGrid>
);

export const Default = Template.bind({});
