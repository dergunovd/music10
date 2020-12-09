import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';

import { GameContext, Screen } from '../../contexts/game.context';
import { Result } from './Result';
import { PROGRESS } from '../../mocks/progress';

describe('Result', () => {
  const setScreen = jest.fn();
  const setResult = jest.fn();

  it('Should render', async () => {
    act(() => {
      render(
        <GameContext.Provider
          value={{
            screen: Screen.PLAYLIST,
            setScreen,
            result: { progress: PROGRESS, isEnd: true },
            setResult,
          }}
        >
          <Result />
        </GameContext.Provider>,
      );
    });
    await waitFor(() =>
      expect(screen.getAllByText('Вы угадали 5 из 8 треков')).toBeDefined(),
    );
  });

  it('Should game again', async () => {
    act(() => {
      render(
        <GameContext.Provider
          value={{
            screen: Screen.PLAYLIST,
            setScreen,
            result: { progress: PROGRESS, isEnd: true },
            setResult,
          }}
        >
          <Result />
        </GameContext.Provider>,
      );
    });
    screen.getByRole('button').click();
    expect(setScreen).toHaveBeenCalledTimes(1);
    expect(setScreen).toHaveBeenCalledWith(Screen.PLAYLIST);
  });
});
