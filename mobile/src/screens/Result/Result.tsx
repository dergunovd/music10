import React, { useCallback, useContext } from "react";
import { Text } from "react-native";
import { css } from "@emotion/native";
import { GameContext, GameScreen, WsContext, Colors } from "@dergunovd/music10";

import { Button, ButtonText } from "../../components";
import { ResultLayout } from "./ResultLayout";
import { Progress } from "../Game/Progress/Progress";

export const Result: React.FC = () => {
  const { result, setScreen, setResult } = useContext(GameContext);
  const ws = useContext(WsContext);

  const replay = useCallback(async () => {
    setResult({ isEnd: false, progress: [] });
    setScreen(GameScreen.PLAYLIST);
    await ws.reconnect();
  }, [setResult, setScreen, ws]);

  return (
    <ResultLayout>
      <Text
        style={css`
          font-size: 48px;
          color: ${Colors.main};
        `}
      >
        Вы угадали {result.progress.filter((r) => r).length} из{" "}
        {result.progress.length} треков
      </Text>
      <Progress />

      <Button onPress={replay} primary accessibilityRole="button">
        <ButtonText>Играть снова</ButtonText>
      </Button>
    </ResultLayout>
  );
};
