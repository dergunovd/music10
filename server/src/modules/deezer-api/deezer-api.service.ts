import { HttpService, Injectable } from '@nestjs/common';
import { MusicApi } from '../../interfaces';

@Injectable()
export class DeezerApiService implements MusicApi {
  constructor(private httpService: HttpService) {}

  async getPlaylists() {
    return await this.httpService
      .get('/user/3098401824/playlists')
      .toPromise()
      .then((r) =>
        r.data.data
          .filter((playlist) => /^music10 ([-–]) /.test(playlist.title))
          .map((playlist) => ({
            id: playlist.id,
            name: playlist.title.replace(/^music10 ([-–]) /, ''),
          })),
      );
  }

  async searchPlaylists(query) {
    return (await this.getPlaylists()).filter((playlist) =>
      new RegExp(query, 'ig').test(playlist.name),
    );
  }

  async getPlaylistById(playlistId) {
    return await this.httpService
      .get(`/playlist/${playlistId}`)
      .toPromise()
      .then((r) => ({
        id: r.data.id,
        name: r.data.title.replace(/^music10 ([-–]) /, ''),
        getTracks: () => this.getTracksByPlaylistId(playlistId),
      }));
  }

  async getTracksByPlaylistId(playlistId) {
    return await this.httpService
      .get(`/playlist/${playlistId}`)
      .toPromise()
      .then((r) =>
        r.data.tracks.data
          .filter((t) => t.preview)
          .map((t) => ({
            id: t.id,
            name: t.title,
            author: t.artist.name,
            mp3: t.preview,
          })),
      );
  }

  async getTrackById(trackId) {
    return await this.httpService
      .get(`/track/${trackId}`)
      .toPromise()
      .then((r) => ({
        id: r.data.id,
        name: r.data.title,
        author: r.data.artist.name,
        mp3: r.data.preview,
      }));
  }
}
