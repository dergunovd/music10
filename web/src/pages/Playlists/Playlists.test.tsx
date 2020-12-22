import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Playlists } from './Playlists';
import { Api, WS } from '../../utils';
import { GameContext, Screen } from '../../contexts';
import { PLAYLISTS } from '../../mocks';
import { NetworkContextProvider } from '../../components';

describe('Playlists', () => {
  const api = new Api();
  const ws = new WS();

  beforeEach(async () => {
    jest.spyOn(api, 'getPlaylists').mockImplementation(async () => PLAYLISTS);
    jest.spyOn(ws, 'setPlaylist');
  });

  it('Should render', async () => {
    act(() => {
      render(
        <NetworkContextProvider api={api} ws={ws}>
          <Playlists />
        </NetworkContextProvider>,
      );
    });
    await waitFor(() => expect(api.getPlaylists).toHaveBeenCalled());
    expect(screen.getAllByRole('button')).toHaveLength(17);
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Русский рэп');
  });

  it('Should select playlist', async () => {
    const setScreen = jest.fn();
    const setResult = jest.fn();
    const setGameState = jest.fn();
    act(() => {
      render(
        <NetworkContextProvider api={api} ws={ws}>
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
            <Playlists />
          </GameContext.Provider>
        </NetworkContextProvider>,
      );
    });
    await waitFor(() => expect(api.getPlaylists).toHaveBeenCalled());
    screen.getAllByRole('button')[0].click();
    await waitFor(() => expect(setScreen).toHaveBeenCalled());
    expect(setScreen).toBeCalledTimes(1);
    expect(setScreen).toBeCalledWith(Screen.GAME);
    expect(ws.setPlaylist).toBeCalledTimes(1);
    expect(ws.setPlaylist).toBeCalledWith(PLAYLISTS[0].id);
  });
});
