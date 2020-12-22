import React, { useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import {
  ApiContext,
  GameContext,
  GameState,
  Screen,
  WsContext,
} from './contexts';
import { Game, Playlists, Result as ResultScreen } from './pages';
import { Api, Result, WS } from './utils';

const App = () => {
  const [screen, setScreen] = useState<Screen>(Screen.PLAYLIST);
  const [result, setResult] = useState<Result>({} as Result);
  const [gameState, setGameState] = useState<GameState>({} as GameState);

  const api = useMemo(() => new Api(), []);
  const ws = useMemo(() => new WS(), []);
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
