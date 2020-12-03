import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistsModule } from './modules/playlists/playlists.module';
import { DeezerApiModule } from './modules/deezer-api';

@Module({
  imports: [PlaylistsModule, DeezerApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
