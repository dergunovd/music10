import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';
import {
  GameContext,
  GameScreen,
  WsContext,
  WS,
  PROGRESS_MOCK,
} from '@dergunovd/music10';

import { Result } from './Result';

describe('Result', () => {
  const ws = new WS();
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
            <Result />
          </GameContext.Provider>
        </WsContext.Provider>,
      );
    });
    await waitFor(() =>
      expect(screen.getAllByText('Вы угадали 5 из 8 треков')).toBeDefined(),
    );
  });

  it('Should game again', async () => {
    act(() => {
      render(
        <WsContext.Provider value={ws}>
          <GameContext.Provider
            value={{
              screen: GameScreen.RESULT,
              setScreen,
              result: { progress: PROGRESS_MOCK, isEnd: true },
              setResult,
              gameState: { isSelectTrack: false, playlistName: '' },
              setGameState,
            }}
          >
            <Result />
          </GameContext.Provider>
        </WsContext.Provider>,
      );
    });
    screen.getByRole('button').click();
    expect(setScreen).toHaveBeenCalledTimes(1);
    expect(setScreen).toHaveBeenCalledWith(GameScreen.PLAYLIST);
    expect(setResult).toHaveBeenCalledTimes(1);
    expect(setResult).toHaveBeenCalledWith({ isEnd: false, progress: [] });
  });
});
