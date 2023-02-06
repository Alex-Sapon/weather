import { AxiosResponse, AxiosError } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';

import { apiStormGlass } from '@/api';
import { getUserLocation, handleAppError } from '@/helpers';

function* loadCurrentData() {
  try {
    const location: GeolocationPosition = yield call(getUserLocation);

    const weather: AxiosResponse<any> = yield call(
      apiStormGlass.fetchCurrentWeather,
      location.coords.latitude,
      location.coords.longitude,
    );

    console.log(weather.data);
  } catch (error) {
    yield handleAppError(error as AxiosError);
  }
}

export function* stormGlassWatcher() {
  yield takeEvery('LOAD_STORM_GLASS_DATA_BASIC', loadCurrentData);
}
