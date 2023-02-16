import axios, { AxiosError } from 'axios';

import { setAppError } from '@/store/actions';

export const handleAppError = (error: AxiosError) => {
  const err = error as Error | AxiosError;
  if (axios.isAxiosError(err)) {
    return setAppError(err.response ? err.response.data.message : err.message);
  }
  return setAppError(err.message);
};
