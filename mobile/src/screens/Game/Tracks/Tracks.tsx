import React, {useCallback, useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

import {Track} from '../../../interfaces';
import {WsContext} from '../../../contexts/ws.context';
import {WsAnswerChoose} from '../../../utils/ws';
import {GameContext} from '../../../contexts/game.context';
import {Caption, Card, Paragraph} from 'react-native-paper';

interface Props {
  tracks: Track[];
}

export const Tracks: React.FC<Props> = ({tracks}) => {
  const [selected, setSelected] = useState(0);
  const [correct, setCorrect] = useState(0);
  const {setResult} = useContext(GameContext);
  const ws = useContext(WsContext);

  useEffect(() => {
    setSelected(0);
    setCorrect(0);
  }, [tracks]);

  const select = useCallback(
    (trackId) => {
      setSelected(trackId);
      ws.choose(trackId).then((socket) =>
        socket.once('chooseResult', ({correct, result}: WsAnswerChoose) => {
          setCorrect(correct);
          setResult(result);
        }),
      );
    },
    [tracks, ws],
  );

  const cardVariant = useCallback(
    (trackId: number): string => {
      if (correct) {
        if (correct === trackId) return 'success';
        if (selected === trackId) return 'danger';
      }
      if (selected === trackId) return 'info';
      return 'light';
    },
    [selected, correct],
  );

  return (
    <View>
      {tracks.map((track) => (
        <Card key={track.id} onPress={() => !correct && select(track.id)}>
          <Paragraph>{track.name}</Paragraph>
          <Caption>{track.author}</Caption>
        </Card>
      ))}
    </View>
  );
};
