import { Playlist } from "./playlist.interface";

export interface IApi {
  getPlaylists: (query: string) => Promise<Playlist[]>;
}
