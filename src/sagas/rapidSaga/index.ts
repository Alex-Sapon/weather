import { AxiosResponse, AxiosError } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';

import { apiStormGlass } from '@/api';
import { RapidWeather } from '@/api/rapid';
import { getUserLocation, handleAppError } from '@/helpers';

function* loadCurrentData() {
  try {
    const location: GeolocationPosition = yield call(getUserLocation);

    const weather: AxiosResponse<RapidWeather> = yield call(
      apiStormGlass.fetchCurrentWeather,
      location.coords.latitude,
      location.coords.longitude,
    );

    const weather2: AxiosResponse<RapidWeather> = yield call(
      apiStormGlass.fetchForecastWeather,
      location.coords.latitude,
      location.coords.longitude,
      6
    );

    console.log(weather.data);
    console.log(weather2.data);
  } catch (error) {
    yield handleAppError(error as AxiosError);
  }
}

export function* stormGlassWatcher() {
  yield takeEvery('LOAD_STORM_GLASS_DATA_BASIC', loadCurrentData);
}
