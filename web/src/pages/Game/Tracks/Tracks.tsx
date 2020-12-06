import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Card, CardDeck, Col, Row } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/types';

import { Track } from '../../../interfaces';
import { WsContext } from '../../../contexts/ws.context';
import { WsAnswerChoose } from '../../../utils/ws';
import { GameContext } from '../../../contexts/game.context';

interface Props {
  tracks: Track[];
}

export const Tracks: React.FC<Props> = ({ tracks }) => {
  const [selected, setSelected] = useState(0);
  const [correct, setCorrect] = useState(0);
  const { setResult } = useContext(GameContext);
  const ws = useContext(WsContext);

  useEffect(() => {
    setSelected(0);
    setCorrect(0);
  }, [tracks]);

  const select = useCallback(
    (trackId) => {
      setSelected(trackId);
      ws.choose(trackId).then((socket) =>
        socket.on('chooseResult', ({ correct, result }: WsAnswerChoose) => {
          setCorrect(correct);
          setResult(result);
        }),
      );
    },
    [tracks, ws],
  );

  const cardVariant = useCallback(
    (trackId: number): Variant => {
      if (correct) {
        if (correct === trackId) return 'success';
        if (selected === trackId) return 'danger';
      }
      if (selected === trackId) return 'info';
      return 'light';
    },
    [selected, correct],
  );

  return (
    <Row>
      <Col>
        <CardDeck>
          {tracks.map((track) => (
            <Card
              key={track.id}
              role="button"
              onClick={() => !correct && select(track.id)}
              bg={cardVariant(track.id)}
            >
              <Card.Body>{track.name}</Card.Body>
              <Card.Footer>{track.author}</Card.Footer>
            </Card>
          ))}
        </CardDeck>
      </Col>
    </Row>
  );
};
