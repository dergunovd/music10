import React, { Dispatch, useEffect } from "react";
import useSound from "react-native-use-sound";

interface Props {
  mp3: string;
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>;
}

export const Music: React.FC<Props> = ({ mp3, setMp3Loading }) => {
  const [play, , stop, { loading }] = useSound(mp3);

  useEffect(() => {
    setMp3Loading(loading);
  }, [loading]);

  useEffect(() => {
    play();
    return stop;
  }, [play]);

  return null;
};
