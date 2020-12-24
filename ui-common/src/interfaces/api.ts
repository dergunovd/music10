import { IPlaylist } from './playlist.interface';

export interface IApi {
  getPlaylists: (query: string) => Promise<IPlaylist[]>;
}
