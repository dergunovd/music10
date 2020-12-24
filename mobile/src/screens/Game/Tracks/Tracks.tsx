import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  WsContext,
  GameContext,
  ITrack,
  IWsAnswerChoose,
} from "@dergunovd/music10";

import { Track, TrackCardVariant, TracksGrid } from "../../../components";

interface Props {
  tracks: ITrack[];
}

export const Tracks: React.FC<Props> = ({ tracks }) => {
  const [selected, setSelected] = useState(0);
  const [correct, setCorrect] = useState(0);
  const { setResult, gameState, setGameState } = useContext(GameContext);
  const ws = useContext(WsContext);

  useEffect(() => {
    setSelected(0);
    setGameState({ ...gameState, isSelectTrack: false });
    setCorrect(0);
  }, [tracks]);

  const select = useCallback(
    (trackId) => {
      setSelected(trackId);
      setGameState({ ...gameState, isSelectTrack: true });
      ws.choose(trackId).then((socket) =>
        socket.once("chooseResult", ({ correct, result }: IWsAnswerChoose) => {
          setCorrect(correct);
          setResult(result);
        })
      );
    },
    [tracks, ws]
  );

  const cardVariant = useCallback(
    (trackId: number): TrackCardVariant => {
      if (correct) {
        if (correct === trackId) return TrackCardVariant.Success;
        if (selected === trackId) return TrackCardVariant.Wrong;
      }
      return TrackCardVariant.Default;
    },
    [selected, correct]
  );

  return (
    <TracksGrid>
      {tracks.map(({ name, id, author }) => (
        <Track
          key={id}
          onPress={() => !correct && select(id)}
          track={name}
          author={author}
          type={cardVariant(id)}
        />
      ))}
    </TracksGrid>
  );
};
