import React from 'react';
import { render } from '@testing-library/react';

import { GameContext, Screen } from '../../contexts';
import { NetworkContextProvider } from '../../components';
import { Game } from './Game';

describe('Game', () => {
  it('Should render', async () => {
    const setScreen = jest.fn();
    const setResult = jest.fn();
    const setGameState = jest.fn();
    render(
      <NetworkContextProvider>
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
      </NetworkContextProvider>,
    );
  });
});
