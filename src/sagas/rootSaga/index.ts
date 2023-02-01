import { AxiosError } from 'axios';
import { all, call, spawn } from 'redux-saga/effects';

import { handleAppError } from '@/helpers';
import { watchOpenWeather } from '@/sagas/openWeatherSaga';

export function* rootWatcher() {
  const sagas = [watchOpenWeather];

  const retrySagas = sagas.map(saga => spawn(function* () {
    try {
      yield call(saga);
    } catch (error) {
      yield handleAppError(error as AxiosError);
    }
  }));

  yield all(retrySagas);
}
