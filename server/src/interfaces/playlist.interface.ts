import { Track } from './track.interface';

export interface Playlist {
  id: string;
  name: string;

  getTracks(): Promise<Track[]>;
}
