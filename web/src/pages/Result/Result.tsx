import React, { useContext } from 'react';

import { GameContext, Screen } from '../../contexts';
import { Button, Header } from '../../components';

export const Result: React.FC = () => {
  const { result, setScreen } = useContext(GameContext);

  return (
    <>
      <Header text="Результаты" />
      <h4>
        Вы угадали {result.progress.filter((r) => r).length} из{' '}
        {result.progress.length} треков
      </h4>
      <Button onClick={() => setScreen(Screen.PLAYLIST)}>Играть снова</Button>
    </>
  );
};
