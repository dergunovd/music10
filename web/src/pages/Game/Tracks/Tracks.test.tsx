import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { WS, WS_HOST } from '../../../utils';
import { WS_ANSWER_NEXT } from '../../../mocks';
import { WsContext } from '../../../contexts';
import { Tracks } from './Tracks';

describe('Tracks', () => {
  const ws = new WS();
  const socket = new WebSocket(`${WS_HOST}/game`);

  it('Should render', async () => {
    act(() => {
      render(
        <WsContext.Provider value={ws}>
          <Tracks tracks={WS_ANSWER_NEXT.tracks} />
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
          <Tracks tracks={WS_ANSWER_NEXT.tracks} />
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
    expect(ws.choose).toHaveBeenCalledWith(WS_ANSWER_NEXT.tracks[0].id);
  });
});
