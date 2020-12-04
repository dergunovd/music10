import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Playlist } from '../../interfaces';
import { ApiContext } from '../../contexts/api.context';
import { GameContext, Screen } from '../../contexts/game.context';
import { WsContext } from '../../contexts/ws.context';

export const Playlists: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const { setScreen } = useContext(GameContext);

  useEffect(() => {
    api?.getPlaylists('').then((playlists) => setPlaylists(playlists));
  }, []);

  const choosePlaylist = useCallback(async (playlistId) => {
    await ws?.setPlaylist(playlistId);
    setScreen?.(Screen.GAME);
  }, []);

  return (
    <Container>
      <h1>Выберите плейлист</h1>
      <Row>
        {playlists.map((p) => (
          <Col key={p.id}>
            <Card onClick={() => choosePlaylist(p.id)}>{p.name}</Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
