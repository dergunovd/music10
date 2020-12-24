import React, { useCallback, useContext, useState } from "react";
import { ScrollView } from "react-native";

import { GameContext, WsContext } from "../../contexts";
import { WsAnswerNext } from "../../utils";
import { Track } from "../../interfaces";
import { Button, ButtonText, Loader } from "../../components";
import { Music } from "./Music/Music";
import { Tracks } from "./Tracks/Tracks";
import { Progress } from "./Progress/Progress";
import { GameLayout } from "./GameLayout";

export const Game: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [mp3, setMp3] = useState("");
  const [isMp3Loading, setMp3Loading] = useState(false);

  const ws = useContext(WsContext);
  const {
    gameState: { isSelectTrack },
  } = useContext(GameContext);

  const play = useCallback(() => {
    ws.next().then((r) =>
      r.once("nextTracks", ({ tracks, mp3 }: WsAnswerNext) => {
        setMp3Loading(true);
        setTracks(tracks);
        setMp3(mp3);
      })
    );
  }, []);

  return (
    <ScrollView>
      <GameLayout>
        <Music mp3={mp3} setMp3Loading={setMp3Loading} />
        {tracks.length && isMp3Loading ? (
          <Loader />
        ) : (
          <Tracks tracks={tracks} />
        )}
        <Progress />

        <Button
          onPress={play}
          disabled={!isSelectTrack && !!tracks.length}
          primary
        >
          <ButtonText>{tracks.length ? "Дальше" : "Поехали"}</ButtonText>
        </Button>
      </GameLayout>
    </ScrollView>
  );
};
