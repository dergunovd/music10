import React, { Dispatch, useEffect } from 'react';
import useSound from 'use-sound';

interface Props {
  mp3: string;
  setMp3Loading: Dispatch<React.SetStateAction<boolean>>;
}

export const Music: React.FC<Props> = ({ mp3, setMp3Loading }) => {
  const [play, { stop }] = useSound(mp3, {
    onload: () => setMp3Loading(false),
  });

  useEffect(() => {
    play();
    return stop;
  }, [play]);

  return null;
};
