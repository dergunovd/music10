import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

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
    <View>
      <Text>Выберите плейлист</Text>
      <View>
        <View>
          {playlists.map((p) => (
            <View key={p.id}>
              <Button title={p.name} onPress={() => choosePlaylist(p.id)} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
