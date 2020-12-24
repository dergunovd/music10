import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {
  Api,
  WS,
  GameContext,
  GameScreen,
  NetworkContextProvider,
  PLAYLISTS_MOCK,
} from '@dergunovd/music10';

import { Playlists } from './Playlists';

describe('Playlists', () => {
  const api = new Api();
  const ws = new WS();

  beforeEach(async () => {
    jest
      .spyOn(api, 'getPlaylists')
      .mockImplementation(async () => PLAYLISTS_MOCK);
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
              screen: GameScreen.PLAYLIST,
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
    expect(setScreen).toBeCalledWith(GameScreen.GAME);
    expect(ws.setPlaylist).toBeCalledTimes(1);
    expect(ws.setPlaylist).toBeCalledWith(PLAYLISTS_MOCK[0].id);
  });
});
