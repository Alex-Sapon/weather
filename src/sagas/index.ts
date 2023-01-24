import { all } from 'redux-saga/effects';

import { watchApp } from '@/store/reducers/appReducer';
import { watchOpenWeather } from '@/store/reducers/openWeatherReducer';

export function* rootWatcher() {
  yield all([watchApp(), watchOpenWeather()]);
}
