import { AxiosError } from 'axios';
import { all, call, put, spawn } from 'redux-saga/effects';

import { watchOpenWeather } from '@/sagas/weatherSaga';
import { handleAppError } from '@/utils';

export function* rootWatcher() {
  const sagas = [watchOpenWeather];

  const retrySagas = sagas.map(saga => spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (error) {
        yield put(handleAppError(error as AxiosError));
      }
    }
  }));

  yield all(retrySagas);
}
