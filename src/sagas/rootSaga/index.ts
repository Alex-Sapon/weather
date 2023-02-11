import { AxiosError } from 'axios';
import { all, call, spawn } from 'redux-saga/effects';

import { handleAppError } from '@/helpers';
import { watchOpenWeather } from '@/sagas/weatherSaga';

export function* rootWatcher() {
  const sagas = [watchOpenWeather];

  const retrySagas = sagas.map(saga => spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (error) {
        yield handleAppError(error as AxiosError);
      }
    }
  }));

  yield all(retrySagas);
}
