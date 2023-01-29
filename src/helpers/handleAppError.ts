import axios, { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';

import { setAppError } from '@/store/actions';

export function* handleAppError(error: AxiosError) {
  const err = error as Error | AxiosError;
  if (axios.isAxiosError(err)) {
    yield put(setAppError(err.response ? err.response.data.message : err.message));
  }
}
