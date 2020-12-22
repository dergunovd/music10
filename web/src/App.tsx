import React, { useState } from 'react';
import { NetworkContextProvider } from './components';

import { GameContext, GameState, Screen } from './contexts';
import { Game, Playlists, Result as ResultScreen } from './pages';
import { Result } from './utils';

const App = () => {
  const [screen, setScreen] = useState<Screen>(Screen.PLAYLIST);
  const [result, setResult] = useState<Result>({} as Result);
  const [gameState, setGameState] = useState<GameState>({} as GameState);

  return (
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
  );
};

export default App;
