import React, { useCallback, useContext, useState } from 'react';

import { GameContext, WsContext } from '../../contexts';
import { Button, Header } from '../../components';
import { WsAnswerNext } from '../../utils';
import { Track } from '../../interfaces';
import { Tracks } from './Tracks/Tracks';
import { Music } from './Music/Music';
import { Progress } from './Progress/Progress';
import { GameLayout } from './GameLayout';

export const Game: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [mp3, setMp3] = useState('');
  const ws = useContext(WsContext);
  const {
    gameState: { isSelectTrack },
  } = useContext(GameContext);

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
      <Header text="Что за трек играет?" />
      <GameLayout>
        <Music mp3={mp3} />
        <Tracks tracks={tracks} />
        <Progress />
        <Button
          onClick={play}
          disabled={!isSelectTrack && !!tracks.length}
          primary
        >
          {tracks.length ? 'Дальше' : 'Поехали'}
        </Button>
      </GameLayout>
    </>
  );
};
