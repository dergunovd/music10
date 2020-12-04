import React from 'react';
import { waitFor, screen, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Playlists } from './Playlists';
import { Api } from '../../utils/api';
import { ApiContext } from '../../contexts/api.context';
import { PLAYLISTS } from '../../mocks/playlists';

describe('Playlists', () => {
  let api = new Api();

  beforeEach(async () => {
    jest.spyOn(api, 'getPlaylists').mockImplementation(async () => PLAYLISTS);
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

  it('Should click', async () => {
    act(() => {
      render(
        <ApiContext.Provider value={api}>
          <Playlists />
        </ApiContext.Provider>,
      );
    });
    await waitFor(() => expect(api.getPlaylists).toHaveBeenCalled());
    screen.getAllByRole('button')[0].click();
  });
});
