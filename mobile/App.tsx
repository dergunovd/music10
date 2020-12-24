import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { css } from "@emotion/native";
// @ts-ignore
import AppMetrica from "react-native-appmetrica";
import {
  Colors,
  IResult,
  NetworkContextProvider,
  GameContext,
  IGameState,
  GameScreen,
} from "@dergunovd/music10";

import { Game, Playlists, Result } from "./src/screens";
import { Header } from "./src/components";

export default function App() {
  const [screen, setScreen] = useState<GameScreen>(GameScreen.PLAYLIST);
  const [result, setResult] = useState<IResult>({} as IResult);
  const [gameState, setGameState] = useState<IGameState>({} as IGameState);

  useEffect(() => {
    AppMetrica.activate({
      apiKey: "6feff3e2-24e0-462c-a7f3-017a380edfb6",
      sessionTimeout: 120,
      firstActivationAsUpdate: true,
    });
  });
  return (
    <View
      style={css`
        background: ${Colors.bg};
        height: 100%;
      `}
    >
      <NetworkContextProvider>
        <GameContext.Provider
          value={{
            screen,
            setScreen,
            result,
            setResult,
            gameState,
            setGameState,
          }}
        >
          <Header />
          {screen === GameScreen.PLAYLIST && <Playlists />}
          {screen === GameScreen.GAME && <Game />}
          {screen === GameScreen.RESULT && <Result />}
        </GameContext.Provider>
      </NetworkContextProvider>
    </View>
  );
}
