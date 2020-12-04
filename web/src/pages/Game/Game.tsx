import React, { useCallback, useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { WsContext } from '../../contexts/ws.context';

export const Game: React.FC = () => {
  const ws = useContext(WsContext);
  const play = useCallback(() => {
    // TODO: getNextTracks
    ws.next().then((r) => console.log(r));
  }, []);

  return (
    <Container>
      GAME
      <Row>
        <Col>
          <Button onClick={play}>Play</Button>
        </Col>
      </Row>
    </Container>
  );
};
