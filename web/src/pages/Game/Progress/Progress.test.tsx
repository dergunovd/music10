import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';

import { Progress } from './Progress';
import { GameContext, Screen } from '../../../contexts/game.context';
import { PROGRESS } from '../../../mocks/progress';

describe('Progress', () => {
  const setScreen = jest.fn();
  const setResult = jest.fn();

  it('Should render', async () => {
    act(() => {
      render(
        <GameContext.Provider
          value={{
            screen: Screen.PLAYLIST,
            setScreen,
            result: { progress: PROGRESS, isEnd: false },
            setResult,
          }}
        >
          <Progress />
        </GameContext.Provider>,
      );
    });
    await waitFor(() =>
      expect(screen.getAllByRole('progressbar')).toHaveLength(8),
    );
    expect(screen.getAllByRole('progressbar')[0].classList).toContain(
      'bg-success',
    );
    expect(screen.getAllByRole('progressbar')[1].classList).toContain(
      'bg-danger',
    );
  });

  it('Should go to result screen', async () => {
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
          <Progress />
        </GameContext.Provider>,
      );
    });
    await waitFor(() => expect(setScreen).toHaveBeenCalled());
    expect(setScreen).toHaveBeenCalledTimes(1);
    expect(setScreen).toHaveBeenCalledWith(Screen.RESULT);
  });
});
