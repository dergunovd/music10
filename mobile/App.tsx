import React, { useState } from "react";
import { View } from "react-native";
import { css } from "@emotion/native";

import { bg, Result } from "./src/utils";
import { GameContext, GameState, Screen } from "./src/contexts";
import { Game, Playlists, Result as ResultScreen } from "./src/screens";
import { NetworkContextProvider } from "../web/src/components";

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.PLAYLIST);
  const [result, setResult] = useState<Result>({} as Result);
  const [gameState, setGameState] = useState<GameState>({} as GameState);

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
          {screen === Screen.PLAYLIST && <Playlists />}
          {screen === Screen.GAME && <Game />}
          {screen === Screen.RESULT && <ResultScreen />}
        </GameContext.Provider>
      </NetworkContextProvider>
    </View>
  );
}
