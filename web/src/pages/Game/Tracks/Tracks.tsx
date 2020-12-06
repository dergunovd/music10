import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Track } from '../../../interfaces';
import { Variant } from 'react-bootstrap/types';
import { WsContext } from '../../../contexts/ws.context';
import { WsAnswerChoose } from '../../../utils/ws';

interface Props {
  tracks: Track[];
}

export const Tracks: React.FC<Props> = ({ tracks }) => {
  const [selected, setSelected] = useState(0);
  const [correct, setCorrect] = useState(0);
  const ws = useContext(WsContext);

  useEffect(() => {
    setSelected(0);
    setCorrect(0);
  }, [tracks]);

  const select = useCallback(
    (trackId) => {
      setSelected(trackId);
      ws.choose(trackId).then((socket) =>
        socket.once('chooseResult', (correctTrackId: WsAnswerChoose) =>
          setCorrect(correctTrackId),
        ),
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
      {tracks.map((track) => (
        <Col key={track.id}>
          <Card
            role="button"
            onClick={() => !correct && select(track.id)}
            bg={cardVariant(track.id)}
          >
            <Card.Body>{track.name}</Card.Body>
            <Card.Footer>{track.author}</Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
