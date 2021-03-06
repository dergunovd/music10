import React, { useCallback, useContext, useState } from 'react';
import {
  GameContext,
  WsContext,
  GameScreen,
  IWsAnswerNext,
  ITrack,
} from '@dergunovd/music10';

import { Button, Header, Loader } from '../../components';
import { Tracks } from './Tracks/Tracks';
import { Music } from './Music/Music';
import { Progress } from './Progress/Progress';
import { GameLayout } from './GameLayout';

export const Game: React.FC = () => {
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [mp3, setMp3] = useState('');
  const [isMp3Loading, setMp3Loading] = useState(false);

  const ws = useContext(WsContext);
  const {
    gameState: { isSelectTrack },
    result: { isEnd },
    setScreen,
  } = useContext(GameContext);

  const play = useCallback(() => {
    if (isEnd) {
      setScreen(GameScreen.RESULT);
    } else {
      ws.next().then((r) =>
        r.once('nextTracks', ({ tracks, mp3 }: IWsAnswerNext) => {
          setMp3Loading(true);
          setTracks(tracks);
          setMp3(mp3);
        }),
      );
    }
  }, [setScreen, isEnd, setMp3Loading, setTracks, setMp3]);

  return (
    <>
      <Header text="Что за трек играет?" />
      <GameLayout>
        <Music mp3={mp3} setMp3Loading={setMp3Loading} />
        {tracks.length && isMp3Loading ? (
          <Loader />
        ) : (
          <Tracks tracks={tracks} />
        )}
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
