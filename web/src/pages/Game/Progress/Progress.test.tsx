import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';

import { Progress } from './Progress';
import { GameContext, Screen } from '../../../contexts';
import { PROGRESS } from '../../../mocks';
import { ProgressBarItemVariant } from '../../../components';

describe('Progress', () => {
  const setScreen = jest.fn();
  const setResult = jest.fn();
  const setGameState = jest.fn();

  it('Should render', async () => {
    act(() => {
      render(
        <GameContext.Provider
          value={{
            screen: Screen.PLAYLIST,
            setScreen,
            result: { progress: PROGRESS, isEnd: false },
            setResult,
            gameState: { isSelectTrack: false, playlistName: '' },
            setGameState,
          }}
        >
          <Progress />
        </GameContext.Provider>,
      );
    });
    await waitFor(() =>
      expect(screen.getAllByRole('listitem')).toHaveLength(10),
    );
    expect(screen.getAllByRole('listitem')[0].dataset.variant).toContain(
      ProgressBarItemVariant.Success,
    );
    expect(screen.getAllByRole('listitem')[1].dataset.variant).toContain(
      ProgressBarItemVariant.Wrong,
    );
    expect(screen.getAllByRole('listitem')[8].dataset.variant).toContain(
      ProgressBarItemVariant.Current,
    );
    expect(screen.getAllByRole('listitem')[9].dataset.variant).toContain(
      ProgressBarItemVariant.Default,
    );
  });
});
