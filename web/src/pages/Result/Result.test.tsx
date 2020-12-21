import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';

import { GameContext, Screen, WsContext } from '../../contexts';
import { PROGRESS } from '../../mocks';
import { Result } from './Result';
import { WS } from '../../utils';

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
              screen: Screen.PLAYLIST,
              setScreen,
              result: { progress: PROGRESS, isEnd: true },
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
              screen: Screen.RESULT,
              setScreen,
              result: { progress: PROGRESS, isEnd: true },
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
    expect(setScreen).toHaveBeenCalledWith(Screen.PLAYLIST);
    expect(setResult).toHaveBeenCalledTimes(1);
    expect(setResult).toHaveBeenCalledWith({ isEnd: false, progress: [] });
  });
});
