import React, { useCallback, useContext } from "react";
import { Text } from "react-native";
import { css } from "@emotion/native";

import { GameContext, Screen, WsContext } from "../../contexts";
import { Button, ButtonText, Header } from "../../components";
import { main } from "../../utils";
import { ResultLayout } from "./ResultLayout";
import { Progress } from "../Game/Progress/Progress";

export const Result: React.FC = () => {
  const { result, setScreen, setResult } = useContext(GameContext);
  const ws = useContext(WsContext);

  const replay = useCallback(async () => {
    setResult({ isEnd: false, progress: [] });
    setScreen(Screen.PLAYLIST);
    await ws.reconnect();
  }, [setResult, setScreen, ws]);

  return (
    <>
      <Header text="Результаты" />
      <ResultLayout>
        <Text
          style={css`
            font-size: 48px;
            color: ${main};
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
    </>
  );
};
