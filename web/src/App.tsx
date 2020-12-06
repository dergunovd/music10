import React, { useMemo, useState } from 'react';
import { ApiContext } from './contexts/api.context';
import { GameContext, Screen } from './contexts/game.context';
import { Playlists } from './pages/Playlists/Playlists';
import { Api } from './utils/api';
import { Game } from './pages/Game/Game';
import { Result, WS } from './utils/ws';
import { WsContext } from './contexts/ws.context';
import { Result as ResultScreen } from './pages/Result/Result';

const App = () => {
  const [screen, setScreen] = useState<Screen>(Screen.PLAYLIST);
  const [result, setResult] = useState<Result>({} as Result);

  const api = useMemo(() => new Api(), []);
  const ws = useMemo(() => new WS(), []);

  return (
    <ApiContext.Provider value={api}>
      <WsContext.Provider value={ws}>
        <GameContext.Provider value={{ screen, setScreen, result, setResult }}>
          {screen === Screen.PLAYLIST && <Playlists />}
          {screen === Screen.GAME && <Game />}
          {screen === Screen.RESULT && <ResultScreen />}
        </GameContext.Provider>
      </WsContext.Provider>
    </ApiContext.Provider>
  );
};

export default App;
