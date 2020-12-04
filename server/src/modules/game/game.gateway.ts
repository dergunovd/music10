import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayDisconnect,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { GameService } from './game.service';
import { Socket } from 'socket.io';
import { PlaylistsService } from '../playlists/playlists.service';

@WebSocketGateway()
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly gameService: GameService,
    private readonly playlistsService: PlaylistsService,
  ) {}

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
    return this.gameService.getClient(socket.id).setPlaylist(playlist);
  }

  @SubscribeMessage('next')
  async getNextTracks(@ConnectedSocket() socket: Socket) {
    return this.gameService.getClient(socket.id).next();
  }

  @SubscribeMessage('chooseTrack')
  async chooseTrack(
    @ConnectedSocket() socket: Socket,
    @MessageBody() trackIndex: number,
  ) {
    return this.gameService.getClient(socket.id).choose(trackIndex);
  }
}
