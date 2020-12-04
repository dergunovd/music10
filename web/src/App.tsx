import React, { useMemo, useState } from 'react';
import { ApiContext } from './contexts/api.context';
import { GameContext, Screen } from './contexts/game.context';
import { Playlists } from './pages/Playlists/Playlists';
import { Api } from './utils/api';
import { Game } from './pages/Game/Game';
import { WS } from './utils/ws';
import { WsContext } from './contexts/ws.context';

const App = () => {
  const [screen, setScreen] = useState<Screen>(Screen.PLAYLIST);
  const api = useMemo(() => new Api(), []);
  const ws = useMemo(() => new WS(), []);
  return (
    <ApiContext.Provider value={api}>
      <WsContext.Provider value={ws}>
        <GameContext.Provider value={{ screen, setScreen }}>
          {screen === Screen.PLAYLIST && <Playlists />}
          {screen === Screen.GAME && <Game />}
        </GameContext.Provider>
      </WsContext.Provider>
    </ApiContext.Provider>
  );
};

export default App;
