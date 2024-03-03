import { AxiosResponse, AxiosRequestHeaders } from 'axios';

export const mockAxios = <T = any>(
  status: number,
  data: T,
  headers?: Record<string, string>
): AxiosResponse<T> => ({
  data,
  status,
  headers: headers || {},
  config: {
    headers: {} as AxiosRequestHeaders,
  },
  statusText: 'OK',
});
