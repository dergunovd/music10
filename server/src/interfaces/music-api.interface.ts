import { Playlist } from './playlist.interface';
import { Track } from './track.interface';

export interface MusicApi {
  getPlaylists(): Promise<Playlist[]>;
  searchPlaylists(query: string): Promise<Playlist[]>;
  getPlaylistById(playlistId: string): Promise<Playlist>;
  getTracksByPlaylistId(playlistId: string): Promise<Track[]>;
  getTrackById(trackId: string): Promise<Track>;
}
