import io from 'socket.io-client';
import { Track } from '../interfaces';

import { WS_HOST } from './variables';

export interface WsAnswerNext {
  mp3: string;
  tracks: Track[];
}

export type WsAnswerChoose = number;

export class WS {
  private socket;

  constructor() {
    this.socket = io(`${WS_HOST}/game`, {
      transports: ['websocket'],
    });
  }

  setPlaylist = (playlistId: number) => {
    this.socket.emit('setPlaylist', playlistId);
  };

  next = async () => {
    return this.socket.emit('next');
  };

  choose = async (trackId: number) => {
    return this.socket.emit('choose', trackId);
  };
}
