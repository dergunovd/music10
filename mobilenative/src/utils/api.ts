import axios, { AxiosInstance } from 'axios';

import { API_HOST } from './variables';
import { IApi } from '../interfaces/api';

export class Api implements IApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_HOST,
    });
  }

  getPlaylists = (query?: string) =>
    this.axiosInstance
      .get(`playlists${query ? `?query=${query}` : ''}`)
      .then(({ data }) => data);
}
