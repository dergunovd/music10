import React, { useCallback, useContext, useState } from 'react';

import { WsContext } from '../../contexts';
import { Button, Header } from '../../components';
import { WsAnswerNext } from '../../utils';
import { Track } from '../../interfaces';
import { Tracks } from './Tracks/Tracks';
import { Music } from './Music/Music';
import { Progress } from './Progress/Progress';

export const Game: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [mp3, setMp3] = useState('');
  const ws = useContext(WsContext);
  const play = useCallback(() => {
    ws.next().then((r) =>
      r.once('nextTracks', ({ tracks, mp3 }: WsAnswerNext) => {
        setTracks(tracks);
        setMp3(mp3);
      }),
    );
  }, []);

  return (
    <>
      <Header text="GAME" />
      <Music mp3={mp3} />
      <Tracks tracks={tracks} />
      <Progress />
      <Button onClick={play}>{tracks.length ? 'Дальше' : 'Поехали'}</Button>
    </>
  );
};
