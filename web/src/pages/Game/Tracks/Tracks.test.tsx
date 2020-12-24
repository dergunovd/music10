import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {
  WS,
  WS_HOST,
  GameContext,
  GameScreen,
  WsContext,
  PROGRESS_MOCK,
  WS_ANSWER_NEXT_MOCK,
} from '@dergunovd/music10';

import { Tracks } from './Tracks';

describe('Tracks', () => {
  const ws = new WS();
  const socket = new WebSocket(`${WS_HOST}/game`);
  const setScreen = jest.fn();
  const setResult = jest.fn();
  const setGameState = jest.fn();

  it('Should render', async () => {
    act(() => {
      render(
        <WsContext.Provider value={ws}>
          <GameContext.Provider
            value={{
              screen: GameScreen.PLAYLIST,
              setScreen,
              result: { progress: PROGRESS_MOCK, isEnd: true },
              setResult,
              gameState: { isSelectTrack: false, playlistName: '' },
              setGameState,
            }}
          >
            <Tracks tracks={WS_ANSWER_NEXT_MOCK.tracks} />
          </GameContext.Provider>
        </WsContext.Provider>,
      );
    });
    await waitFor(() => expect(screen.getAllByRole('button')).toHaveLength(4));
    expect(screen.getAllByRole('button')[0].textContent).toBe(
      'Вокруг шумКаста',
    );
  });

  it('Should select', async () => {
    act(() => {
      render(
        <WsContext.Provider value={ws}>
          <GameContext.Provider
            value={{
              screen: GameScreen.PLAYLIST,
              setScreen,
              result: { progress: PROGRESS_MOCK, isEnd: true },
              setResult,
              gameState: { isSelectTrack: false, playlistName: '' },
              setGameState,
            }}
          >
            <Tracks tracks={WS_ANSWER_NEXT_MOCK.tracks} />
          </GameContext.Provider>
        </WsContext.Provider>,
      );
    });
    jest.spyOn(ws, 'choose').mockImplementation(
      async () =>
        (({
          ...socket,
          on: jest.fn(),
        } as unknown) as SocketIOClient.Socket),
    );
    await waitFor(() => expect(screen.getAllByRole('button')).toHaveLength(4));
    screen.getAllByRole('button')[0].click();
    expect(ws.choose).toHaveBeenCalledTimes(1);
    expect(ws.choose).toHaveBeenCalledWith(WS_ANSWER_NEXT_MOCK.tracks[0].id);
  });
});
