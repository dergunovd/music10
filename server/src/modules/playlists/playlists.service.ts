import { Injectable } from '@nestjs/common';
import { DeezerApiService } from '../deezer-api';

@Injectable()
export class PlaylistsService {
  constructor(private apiService: DeezerApiService) {}

  getPlaylists() {
    return this.apiService.getPlaylists();
  }

  searchPlaylists(query) {
    return this.apiService.searchPlaylists(query);
  }

  getPlaylist(playlistId) {
    return this.apiService.getPlaylistById(playlistId);
  }
}
