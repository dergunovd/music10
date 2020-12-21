import React, { useCallback, useContext, useEffect, useState } from "react";
import { View } from "react-native";

import { Playlist } from "../../interfaces";
import { ApiContext, GameContext, Screen, WsContext } from "../../contexts";
import { Button, Header, PlaylistGrid } from "../../components";

export const Playlists: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const { setScreen } = useContext(GameContext);

  useEffect(() => {
    api?.getPlaylists().then((playlists) => setPlaylists(playlists));
  }, []);

  const choosePlaylist = useCallback(async (playlistId) => {
    await ws?.setPlaylist(playlistId);
    setScreen?.(Screen.GAME);
  }, []);

  return (
    <View>
      <Header text="Выберите плейлист" />
      <PlaylistGrid>
        {playlists.map((p) => (
          <Button
            key={p.id}
            onPress={() => choosePlaylist(p.id)}
            title={p.name}
          />
        ))}
      </PlaylistGrid>
    </View>
  );
};
