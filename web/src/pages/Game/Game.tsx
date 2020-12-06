import React, { useCallback, useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { WsContext } from '../../contexts/ws.context';
import { Tracks } from './Tracks/Tracks';
import { WsAnswerNext } from '../../utils/ws';
import { Track } from '../../interfaces';
import { Music } from './Music/Music';
import { Progress } from './Progress/Progress';

export const Game: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [mp3, setMp3] = useState('');
  const ws = useContext(WsContext);
  const play = useCallback(() => {
    ws.next().then((r) =>
      r.once('nextTracks', ({ tracks, mp3 }: WsAnswerNext) => {
        setTracks(tracks);
        setMp3(mp3);
      }),
    );
  }, []);

  return (
    <Container>
      <h2>GAME</h2>
      <Music mp3={mp3} />
      <Tracks tracks={tracks} />
      <Progress />

      <Row>
        <Col>
          <Button onClick={play}>{tracks.length ? 'Next' : 'Play'}</Button>
        </Col>
      </Row>
    </Container>
  );
};
