import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { Button, Divider, Title } from "react-native-paper";

import { Playlist } from "../../interfaces";
import { ApiContext } from "../../contexts/api.context";
import { GameContext, Screen } from "../../contexts/game.context";
import { WsContext } from "../../contexts/ws.context";

export const Playlists: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const { setScreen } = useContext(GameContext);

  useEffect(() => {
    api
      ?.getPlaylists()
      .then((playlists: Playlist[]) => setPlaylists(playlists));
  }, []);

  const choosePlaylist = useCallback(async (playlistId) => {
    await ws?.setPlaylist(playlistId);
    setScreen?.(Screen.GAME);
  }, []);

  return (
    <ScrollView>
      <Title>Выберите плейлист</Title>
      <View>
        {playlists.map((p, index) => (
          <View key={p.id}>
            {index ? <Divider /> : null}
            <Button mode="contained" onPress={() => choosePlaylist(p.id)}>
              {p.name}
            </Button>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
