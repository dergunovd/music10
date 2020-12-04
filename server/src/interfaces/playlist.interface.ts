import { Track } from './track.interface';

export interface Playlist {
  id: number;
  name: string;

  getTracks(): Promise<Track[]>;
}
