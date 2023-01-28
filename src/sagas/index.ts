import { all, call, spawn } from 'redux-saga/effects';

import { watchOpenWeather } from '@/store/reducers';

export function* rootWatcher() {
  const sagas = [watchOpenWeather];

  const retrySagas = sagas.map(saga => spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (e) { /* empty */ }
    }
  }));

  yield all(retrySagas);
}
