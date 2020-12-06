import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Server } from 'mock-socket';

import { WS } from '../../../utils/ws';
import { WS_ANSWER_NEXT } from '../../../mocks/tracks';
import { WsContext } from '../../../contexts/ws.context';
import { Tracks } from './Tracks';
import { WS_HOST } from '../../../utils/variables';

describe('Tracks', () => {
  const mockServer = new Server(WS_HOST);
  mockServer.on('choose', (socket) => {
    console.log(socket);
  });
  const ws = new WS();

  beforeEach(() => {
    jest
      .spyOn(ws, 'choose')
      .mockImplementation(
        async () =>
          (mockServer.clients()[0] as unknown) as SocketIOClient.Socket,
      );
  });

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
    await waitFor(() => expect(screen.getAllByRole('button')).toHaveLength(4));
    screen.getAllByRole('button')[0].click();
    expect(screen.getAllByRole('button')[0].classList).toContain('bg-info');
    expect(ws.choose).toHaveBeenCalled();
    expect(ws.choose).toHaveBeenCalledTimes(1);
    expect(ws.choose).toHaveBeenCalledWith(WS_ANSWER_NEXT.tracks[0].id);
  });

  it('Should highlight correct', async () => {
    act(() => {
      render(
        <WsContext.Provider value={ws}>
          <Tracks tracks={WS_ANSWER_NEXT.tracks} />
        </WsContext.Provider>,
      );
    });
    await waitFor(() => expect(screen.getAllByRole('button')).toHaveLength(4));
    screen.getAllByRole('button')[0].click();
    // console.log(socket);

    mockServer.emit('chooseResult', WS_ANSWER_NEXT.tracks[0].id);
    await waitFor(() =>
      expect(screen.getAllByRole('button')[0].classList).toContain(
        'bg-success',
      ),
    );
  });

  it('Should highlight wrong', async () => {
    act(() => {
      render(
        <WsContext.Provider value={ws}>
          <Tracks tracks={WS_ANSWER_NEXT.tracks} />
        </WsContext.Provider>,
      );
    });
  });
});
