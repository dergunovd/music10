import React, { useState } from 'react';
import {
  IResult,
  GameContext,
  IGameState,
  GameScreen,
  NetworkContextProvider,
} from '@dergunovd/music10';

import { Game, Playlists, Result as ResultScreen } from './pages';

const App = () => {
  const [screen, setScreen] = useState<GameScreen>(GameScreen.PLAYLIST);
  const [result, setResult] = useState<IResult>({} as IResult);
  const [gameState, setGameState] = useState<IGameState>({} as IGameState);

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
        {screen === GameScreen.PLAYLIST && <Playlists />}
        {screen === GameScreen.GAME && <Game />}
        {screen === GameScreen.RESULT && <ResultScreen />}
      </GameContext.Provider>
    </NetworkContextProvider>
  );
};

export default App;
