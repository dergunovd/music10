import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayDisconnect,
  OnGatewayConnection,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { GameService } from './game.service';
import { PlaylistsService } from '../playlists/playlists.service';

@WebSocketGateway(3001, { namespace: 'game' })
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly gameService: GameService,
    private readonly playlistsService: PlaylistsService,
  ) {}

  @WebSocketServer()
  private server: Server;

  public handleConnection(socket: Socket) {
    this.gameService.addClient(socket.id);
  }

  public handleDisconnect(socket: Socket) {
    this.gameService.removeClient(socket.id);
  }

  @SubscribeMessage('setPlaylist')
  async setPlaylist(
    @ConnectedSocket() socket: Socket,
    @MessageBody() playlistId: string,
  ) {
    const playlist = await this.playlistsService.getPlaylist(playlistId);
    socket.emit(
      'playlist',
      await this.gameService.getClient(socket.id).setPlaylist(playlist),
    );
  }

  @SubscribeMessage('next')
  async getNextTracks(@ConnectedSocket() socket: Socket) {
    socket.emit(
      'nextTracks',
      await this.gameService.getClient(socket.id).next(),
    );
  }

  @SubscribeMessage('choose')
  async chooseTrack(
    @ConnectedSocket() socket: Socket,
    @MessageBody() trackIndex: number,
  ) {
    socket.emit(
      'chooseResult',
      await this.gameService.getClient(socket.id).choose(trackIndex),
    );
  }
}
