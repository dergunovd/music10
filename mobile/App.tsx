import { StatusBar } from "expo-status-bar";
import React, { useMemo, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Result, WS } from "./src/utils/ws";
import { Api } from "./src/utils/api";
import { ApiContext } from "./src/contexts/api.context";
import { WsContext } from "./src/contexts/ws.context";
import { Playlists } from "./src/screens/Playlists/Playlists";
import { GameContext, Screen } from "./src/contexts/game.context";
import { Game } from "./src/screens/Game/Game";
import { Result as ResultScreen } from "./src/screens/Result/Result";

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.PLAYLIST);
  const [result, setResult] = useState<Result>({} as Result);

  const api = useMemo(() => new Api(), []);
  const ws = useMemo(() => new WS(), []);

  return (
    <PaperProvider>
      <ApiContext.Provider value={api}>
        <WsContext.Provider value={ws}>
          <GameContext.Provider
            value={{ screen, setScreen, result, setResult }}
          >
            {screen === Screen.PLAYLIST && <Playlists />}
            {screen === Screen.GAME && <Game />}
            {screen === Screen.RESULT && <ResultScreen />}
          </GameContext.Provider>
        </WsContext.Provider>
      </ApiContext.Provider>
    </PaperProvider>
  );
}
