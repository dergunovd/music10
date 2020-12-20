import React, { useCallback, useContext } from 'react';

import { GameContext, Screen } from '../../contexts';
import { Button, Header } from '../../components';

export const Result: React.FC = () => {
  const { result, setScreen, setResult } = useContext(GameContext);

  const replay = useCallback(() => {
    setResult({ isEnd: false, progress: [] });
    setScreen(Screen.PLAYLIST);
  }, [setResult, setScreen]);

  return (
    <>
      <Header text="Результаты" />
      <h4>
        Вы угадали {result.progress.filter((r) => r).length} из{' '}
        {result.progress.length} треков
      </h4>
      <Button onClick={replay}>Играть снова</Button>
    </>
  );
};
