import React, { useCallback, useContext } from 'react';
import { useQuery } from 'react-query';
import {
  ApiContext,
  GameContext,
  GameScreen,
  WsContext,
  IPlaylist,
} from '@dergunovd/music10';

import {
  Button,
  Header,
  Loader,
  PlaylistGrid,
  ErrorMessage,
} from '../../components';

export const Playlists: React.FC = () => {
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const { setScreen } = useContext(GameContext);
  const { isLoading, isError, isSuccess, error, data } = useQuery<
    IPlaylist[],
    Error
  >('loadPlaylists', () => api?.getPlaylists());

  const choosePlaylist = useCallback(async (playlistId) => {
    await ws?.setPlaylist(playlistId);
    setScreen?.(GameScreen.GAME);
  }, []);

  return (
    <>
      <Header text="Выберите плейлист" />
      {isLoading && <Loader />}
      {isError && <ErrorMessage>Ошибка: ${error?.message}</ErrorMessage>}
      {isSuccess && (
        <PlaylistGrid>
          {data?.map((p) => (
            <Button key={p.id} onClick={() => choosePlaylist(p.id)}>
              {p.name}
            </Button>
          ))}
        </PlaylistGrid>
      )}
    </>
  );
};
