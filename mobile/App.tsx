import React, { useMemo, useState } from "react";
import { Api, Result, WS } from "./src/utils";
import {
  ApiContext,
  GameContext,
  GameState,
  Screen,
  WsContext,
} from "./src/contexts";
import { Playlists, Game, Result as ResultScreen } from "./src/screens";

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.PLAYLIST);
  const [result, setResult] = useState<Result>({} as Result);
  const [gameState, setGameState] = useState<GameState>({} as GameState);

  const api = useMemo(() => new Api(), []);
  const ws = useMemo(() => new WS(), []);

  return (
    <ApiContext.Provider value={api}>
      <WsContext.Provider value={ws}>
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
      </WsContext.Provider>
    </ApiContext.Provider>
  );
}
