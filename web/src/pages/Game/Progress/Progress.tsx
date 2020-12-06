import React, { useContext, useEffect } from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import { GameContext, Screen } from '../../../contexts/game.context';

const TRACKS_PER_ROUND = 10;

export const Progress: React.FC = () => {
  const { result, setScreen } = useContext(GameContext);

  useEffect(() => {
    if (result.isEnd) setScreen(Screen.RESULT);
  });

  return (
    <Row>
      <Col>
        <ProgressBar>
          {result.progress?.map((r, index) => (
            <ProgressBar
              variant={r ? 'success' : 'danger'}
              now={100 / TRACKS_PER_ROUND}
              key={index}
            />
          ))}
        </ProgressBar>
      </Col>
    </Row>
  );
};
