import { Result } from './result.entity';
import { Playlist, Track } from '../../../interfaces';
import { randomSort } from '../../../utils';
import { TracksForUser } from '../dtos/tracksForUser';

export class Game {
  result: Result;

  displayedTracks: Track[];

  private correctTrack: Track;

  private playlist: Playlist;

  private tracks: Track[] = [];

  setPlaylist(playlist: Playlist) {
    this.playlist = playlist;
    this.result = new Result();
    return playlist;
  }

  async next(): Promise<TracksForUser> {
    await this.fillTracks();
    const correctTrack = this.tracks.shift();
    this.correctTrack = correctTrack;

    const wrongTracks = this.tracks.slice(0, 3);
    this.displayedTracks = randomSort([correctTrack, ...wrongTracks]);
    return {
      tracks: this.displayedTracks.map(({ mp3, ...track }) => track),
      mp3: this.correctTrack.mp3,
    };
  }

  choose(chooseTrackId: number): number {
    this.result.updateProgress(chooseTrackId === this.correctTrack.id);
    return this.correctTrack.id;
  }

  private async fillTracks() {
    while (this.tracks.length < 4) {
      this.tracks = randomSort([...(await this.playlist.getTracks())]);
    }
  }
}
