import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { css } from "@emotion/native";
// @ts-ignore
import AppMetrica from "react-native-appmetrica";

import { bg, Result } from "./src/utils";
import { GameContext, GameState, Screen } from "./src/contexts";
import { Game, Playlists, Result as ResultScreen } from "./src/screens";
import { Header, NetworkContextProvider } from "./src/components";

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.PLAYLIST);
  const [result, setResult] = useState<Result>({} as Result);
  const [gameState, setGameState] = useState<GameState>({} as GameState);

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
        background: ${bg};
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
          {screen === Screen.PLAYLIST && <Playlists />}
          {screen === Screen.GAME && <Game />}
          {screen === Screen.RESULT && <ResultScreen />}
        </GameContext.Provider>
      </NetworkContextProvider>
    </View>
  );
}
