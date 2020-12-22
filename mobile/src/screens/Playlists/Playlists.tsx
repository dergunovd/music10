import React, { useCallback, useContext } from "react";
import { useQuery } from "react-query";

import { Playlist } from "../../interfaces";
import { ApiContext, GameContext, Screen, WsContext } from "../../contexts";
import {
  Button,
  Header,
  PlaylistGrid,
  Loader,
  ErrorMessage,
  ButtonText,
} from "../../components";
import { View } from "react-native";

export const Playlists: React.FC = () => {
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const { setScreen } = useContext(GameContext);
  const { isLoading, isError, isSuccess, error, data } = useQuery<
    Playlist[],
    Error
  >("loadPlaylists", () => api?.getPlaylists());

  const choosePlaylist = useCallback(
    async (playlistId) => {
      await ws?.setPlaylist(playlistId);
      setScreen?.(Screen.GAME);
    },
    [setScreen, ws]
  );

  return (
    <View>
      <Header text="Выберите плейлист" />
      {isLoading && <Loader />}
      {isError && <ErrorMessage>Ошибка: {error?.message}</ErrorMessage>}
      {isSuccess && (
        <PlaylistGrid>
          {data?.map((p) => (
            <Button key={p.id} onPress={() => choosePlaylist(p.id)}>
              <ButtonText>{p.name}</ButtonText>
            </Button>
          ))}
        </PlaylistGrid>
      )}
    </View>
  );
};
