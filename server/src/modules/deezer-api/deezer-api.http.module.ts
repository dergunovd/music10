import { HttpModule } from '@nestjs/common';

/**
 * Http module for Deezer API
 */
export const DeezerApiHttpModule = HttpModule.registerAsync({
  useFactory: () => ({
    timeout: 5000,
    maxRedirects: 5,
    baseURL: 'https://api.deezer.com',
  }),
});
