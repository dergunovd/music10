import { Injectable } from '@nestjs/common';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  private clients: Record<string, Game> = {};

  public addClient(clientId: string): void {
    this.clients[clientId] = new Game();
  }

  public removeClient(clientId: string): void {
    delete this.clients[clientId];
  }

  public getClient(clientId: string) {
    return this.clients[clientId];
  }
}
