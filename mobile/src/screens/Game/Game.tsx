import React, { useCallback, useContext, useState } from "react";
import { ScrollView, View } from "react-native";

import { GameContext, WsContext } from "../../contexts";
import { WsAnswerNext } from "../../utils";
import { Track } from "../../interfaces";
import { Button, Header } from "../../components";
import { Music } from "./Music/Music";
import { Tracks } from "./Tracks/Tracks";
import { Progress } from "./Progress/Progress";
import { GameLayout } from "./GameLayout";

export const Game: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [mp3, setMp3] = useState("");

  const ws = useContext(WsContext);
  const {
    gameState: { isSelectTrack },
  } = useContext(GameContext);

  const play = useCallback(() => {
    ws.next().then((r) =>
      r.once("nextTracks", ({ tracks, mp3 }: WsAnswerNext) => {
        setTracks(tracks);
        setMp3(mp3);
      })
    );
  }, []);

  return (
    <ScrollView>
      <Header text="GAME" />
      <GameLayout>
        <Music mp3={mp3} />
        <Tracks tracks={tracks} />
        <Progress />

        <Button
          onPress={play}
          disabled={!isSelectTrack && !!tracks.length}
          primary
          title={tracks.length ? "Дальше" : "Поехали"}
        />
      </GameLayout>
    </ScrollView>
  );
};
