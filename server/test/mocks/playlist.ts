import { TRACKS } from './tracks';
import { Playlist } from '../../src/interfaces';

export const PLAYLIST: Playlist = {
  id: 6536346784,
  name: 'Русский рэп',
  getTracks: async () => TRACKS,
};
