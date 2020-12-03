import { HttpModule } from '@nestjs/common';

export const DeezerApiHttpModule = HttpModule.registerAsync({
  useFactory: () => ({
    timeout: 5000,
    maxRedirects: 5,
    baseURL: 'https://api.deezer.com',
  }),
});
