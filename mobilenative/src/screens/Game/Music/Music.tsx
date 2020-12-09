import React, { useEffect } from "react";
import Sound from "react-native-sound";

interface Props {
  mp3: string;
}

export const Music: React.FC<Props> = ({ mp3 }) => {
  useEffect(() => {
    const player = new Sound(mp3, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
      player.play();
    });
    return player.stop;
  }, [mp3]);
  return null;
};
