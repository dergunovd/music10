import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';

@Controller('playlists')
export class PlaylistsController {
  constructor(private service: PlaylistsService) {}

  @Get()
  getPlaylists(@Query('query') query: string) {
    return query
      ? this.service.searchPlaylists(query)
      : this.service.getPlaylists();
  }

  @Get('/:id')
  getPlaylist(@Param('id') playlistId: string) {
    return this.service.getPlaylist(playlistId);
  }
}
