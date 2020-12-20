import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Track as TrackInterface } from '../../../interfaces';
import { GameContext, WsContext } from '../../../contexts';
import { WsAnswerChoose } from '../../../utils';
import { Track, TrackCardType, TracksGrid } from '../../../components';

interface Props {
  tracks: TrackInterface[];
}

export const Tracks: React.FC<Props> = ({ tracks }) => {
  const [selected, setSelected] = useState(0);
  const [correct, setCorrect] = useState(0);
  const { setResult } = useContext(GameContext);
  const ws = useContext(WsContext);

  useEffect(() => {
    setSelected(0);
    setCorrect(0);
  }, [tracks]);

  const select = useCallback(
    (trackId) => {
      setSelected(trackId);
      ws.choose(trackId).then((socket) =>
        socket.on('chooseResult', ({ correct, result }: WsAnswerChoose) => {
          setCorrect(correct);
          setResult(result);
        }),
      );
    },
    [tracks, ws],
  );

  const cardVariant = useCallback(
    (trackId: number): TrackCardType | undefined => {
      if (correct) {
        if (correct === trackId) return 'success';
        if (selected === trackId) return 'wrong';
      }
      return undefined;
    },
    [selected, correct],
  );

  return (
    <TracksGrid>
      {tracks.map(({ name, id, author }) => (
        <Track
          key={id}
          onClick={() => !correct && select(id)}
          track={name}
          author={author}
          type={cardVariant(id)}
        />
      ))}
    </TracksGrid>
  );
};
