import React, { useCallback, useContext } from 'react';

import { GameContext, Screen, WsContext } from '../../contexts';
import { Button, Header } from '../../components';
import { ResultLayout } from './ResultLayout';
import { Progress } from '../Game/Progress/Progress';

export const Result: React.FC = () => {
  const { result, setScreen, setResult } = useContext(GameContext);
  const ws = useContext(WsContext);

  const replay = useCallback(async () => {
    setResult({ isEnd: false, progress: [] });
    setScreen(Screen.PLAYLIST);
    await ws.reconnect();
  }, [setResult, setScreen]);

  return (
    <>
      <Header text="Результаты" />
      <ResultLayout>
        <h2>
          Вы угадали {result.progress.filter((r) => r).length} из{' '}
          {result.progress.length} треков
        </h2>
        <Progress />

        <Button onClick={replay} primary>
          Играть снова
        </Button>
      </ResultLayout>
    </>
  );
};
