import { Track } from '../../../interfaces';

export interface TracksForUser {
  tracks: Pick<Track, 'id' | 'author' | 'name'>[];
  mp3: string;
}
