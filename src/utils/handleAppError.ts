import axios, { AxiosError } from 'axios';

import { setAppError } from '@/store/actions';

export const handleAppError = (error: AxiosError) => {
  const err = error as Error | AxiosError;

  if (error.name === 'CanceledError') {
    return setAppError('');
  }

  if (axios.isAxiosError(err)) {
    return setAppError(err.response?.data.error
      ? err.response?.data.error.message
      : err.response?.data.message
    );
  }

  return setAppError(err.message);
};
