import React from 'react';
import { render } from '@testing-library/react';

import { ApiContext, GameContext, Screen, WsContext } from '../../contexts';
import { Game } from './Game';
import { Api, WS } from '../../utils';

describe('Game', () => {
  const api = new Api();
  const ws = new WS();
  it('Should render', async () => {
    const setScreen = jest.fn();
    const setResult = jest.fn();
    const setGameState = jest.fn();
    render(
      <ApiContext.Provider value={api}>
        <WsContext.Provider value={ws}>
          <GameContext.Provider
            value={{
              screen: Screen.PLAYLIST,
              setScreen,
              result: { progress: [], isEnd: false },
              setResult,
              gameState: { isSelectTrack: false, playlistName: '' },
              setGameState,
            }}
          >
            <Game />
          </GameContext.Provider>
        </WsContext.Provider>
      </ApiContext.Provider>,
    );
  });
});
