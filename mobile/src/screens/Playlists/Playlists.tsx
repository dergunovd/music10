import React, { useCallback, useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { css } from "@emotion/native";

import { Playlist } from "../../interfaces";
import { ApiContext, GameContext, Screen, WsContext } from "../../contexts";
import { Button, Header, PlaylistGrid } from "../../components";
import { main } from "../../utils";

export const Playlists: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const { setScreen } = useContext(GameContext);

  useEffect(() => {
    api?.getPlaylists().then((data) => setPlaylists(data));
  }, [api]);

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
      <PlaylistGrid>
        {playlists.map((p) => (
          <Button key={p.id} onPress={() => choosePlaylist(p.id)}>
            <Text
              style={css`
                color: ${main};
              `}
            >
              {p.name}
            </Text>
          </Button>
        ))}
      </PlaylistGrid>
    </View>
  );
};
