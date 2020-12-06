import React, { useEffect } from 'react';
import useSound from 'use-sound';

interface Props {
  mp3: string;
}

export const Music: React.FC<Props> = ({ mp3 }) => {
  const [play, { stop }] = useSound(mp3);

  useEffect(() => {
    play();
    return stop;
  }, [play]);

  return null;
};
