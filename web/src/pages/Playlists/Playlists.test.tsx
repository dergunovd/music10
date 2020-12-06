import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Playlists } from './Playlists';
import { Api } from '../../utils/api';
import { ApiContext } from '../../contexts/api.context';
import { PLAYLISTS } from '../../mocks/playlists';
import { GameContext, Screen } from '../../contexts/game.context';
import { WS } from '../../utils/ws';
import { WsContext } from '../../contexts/ws.context';

describe('Playlists', () => {
  let api = new Api();
  let ws = new WS();

  beforeEach(async () => {
    jest.spyOn(api, 'getPlaylists').mockImplementation(async () => PLAYLISTS);
    jest.spyOn(ws, 'setPlaylist');
  });

  it('Should render', async () => {
    act(() => {
      render(
        <ApiContext.Provider value={api}>
          <Playlists />
        </ApiContext.Provider>,
      );
    });
    await waitFor(() => expect(api.getPlaylists).toHaveBeenCalled());
    expect(screen.getAllByRole('button')).toHaveLength(17);
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Русский рэп');
  });

  it('Should select playlist', async () => {
    const setScreen = jest.fn();
    act(() => {
      render(
        <ApiContext.Provider value={api}>
          <WsContext.Provider value={ws}>
            <GameContext.Provider
              value={{ screen: Screen.PLAYLIST, setScreen }}
            >
              <Playlists />
            </GameContext.Provider>
          </WsContext.Provider>
        </ApiContext.Provider>,
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
