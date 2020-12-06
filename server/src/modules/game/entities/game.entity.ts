import { Result } from './result.entity';
import { Playlist, Track } from '../../../interfaces';
import { randomSort } from '../../../utils';
import { TracksForUser } from '../dtos/tracksForUser';
import { ChooseResult } from '../dtos/chooseResult';

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
    await this.sortTracks();
    const correctTrack = this.tracks.shift();
    this.correctTrack = correctTrack;

    const wrongTracks = this.tracks.slice(0, 3);
    this.displayedTracks = randomSort([correctTrack, ...wrongTracks]);
    return {
      tracks: this.displayedTracks.map(({ mp3, ...track }) => track),
      mp3: this.correctTrack.mp3,
    };
  }

  choose(chooseTrackId: number): ChooseResult {
    this.result.updateProgress(chooseTrackId === this.correctTrack.id);
    return { correct: this.correctTrack.id, result: this.result };
  }

  private async fillTracks() {
    while (this.tracks.length < 4) {
      this.tracks = randomSort([...(await this.playlist.getTracks())]);
    }
  }

  private async sortTracks() {
    this.tracks = randomSort(this.tracks);
  }
}
