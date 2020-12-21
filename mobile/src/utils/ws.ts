import io from "socket.io-client";
import { Track } from "../interfaces";

import { WS_HOST } from "./variables";

export interface Result {
  progress: boolean[];
  isEnd: boolean;
}

export interface WsAnswerNext {
  mp3: string;
  tracks: Track[];
}

export interface WsAnswerChoose {
  correct: number;
  result: Result;
}

export class WS {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io(`${WS_HOST}/game`, {
      transports: ["websocket"],
    });
  }

  setPlaylist = (playlistId: number) =>
    this.socket.emit("setPlaylist", playlistId);

  next = async () => this.socket.emit("next");

  choose = async (trackId: number) => this.socket.emit("choose", trackId);

  reconnect = async () => {
    await this.socket.disconnect();
    this.socket.connect();
  };
}
