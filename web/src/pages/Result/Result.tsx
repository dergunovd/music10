import React, { useContext } from 'react';
import { GameContext, Screen } from '../../contexts/game.context';
import { Button, Container } from 'react-bootstrap';

export const Result: React.FC = () => {
  const { result, setScreen } = useContext(GameContext);

  return (
    <Container>
      <h2>Результаты</h2>
      <h4>
        Вы угадали {result.progress.filter((r) => r).length} из{' '}
        {result.progress.length} треков
      </h4>
      <Button onClick={() => setScreen(Screen.PLAYLIST)}>Играть снова</Button>
    </Container>
  );
};
