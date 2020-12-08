import React, { useEffect } from "react";
import { Player } from "@react-native-community/audio-toolkit";

interface Props {
  mp3: string;
}

export const Music: React.FC<Props> = ({ mp3 }) => {
  useEffect(() => {
    new Player(mp3, {
      autoDestroy: true,
    });
  }, [mp3]);
  return null;
};
