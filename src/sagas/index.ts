import { all } from 'redux-saga/effects';

import { watchChangeAppTheme } from '@/store/reducers/appReducer';

export function* rootWatcher() {
  yield all([watchChangeAppTheme()]);
}