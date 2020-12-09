import React, { useCallback, useContext, useState } from "react";
import { View } from "react-native";
import { WsContext } from "../../contexts/ws.context";
import { Tracks } from "./Tracks/Tracks";
import { WsAnswerNext } from "../../utils/ws";
import { Track } from "../../interfaces";
import { Music } from "./Music/Music";
import { Progress } from "./Progress/Progress";
import { Button, Title } from "react-native-paper";

export const Game: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [mp3, setMp3] = useState("");
  const ws = useContext(WsContext);
  const play = useCallback(() => {
    ws.next().then((r) =>
      r.once("nextTracks", ({ tracks, mp3 }: WsAnswerNext) => {
        setTracks(tracks);
        setMp3(mp3);
      })
    );
  }, []);

  return (
    <View>
      <Title>GAME</Title>
      <Music mp3={mp3} />
      <Tracks tracks={tracks} />
      <Progress />

      <Button onPress={play}>{tracks.length ? "Next" : "Play"}</Button>
    </View>
  );
};