import React from "react";

import { PlaylistGrid } from "./PlaylistGrid";
import { Button } from "../Button";

export default {
  title: "Components/PlaylistGrid",
  component: PlaylistGrid,
};

const Template = () => (
  <PlaylistGrid>
    <Button
      title="Русский рэп"
      onPress={() => {
        void 0;
      }}
    />
    <Button
      title="Топ 100"
      onPress={() => {
        void 0;
      }}
    />
    <Button
      title="Альтернатива"
      onPress={() => {
        void 0;
      }}
    />
    <Button
      title="Hip-Hop 90's"
      onPress={() => {
        void 0;
      }}
    />
    <Button
      title="Евровидение 2020"
      onPress={() => {
        void 0;
      }}
    />
    <Button
      title="Дискотека 90х"
      onPress={() => {
        void 0;
      }}
    />
    <Button
      title="Тем, кому за 20"
      onPress={() => {
        void 0;
      }}
    />
    <Button
      title="Тем, кому за 30"
      onPress={() => {
        void 0;
      }}
    />
  </PlaylistGrid>
);

export const Default = Template.bind({});
