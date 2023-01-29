import { AxiosResponse } from 'axios';
import { call, debounce, put, takeEvery } from 'redux-saga/effects';

import { apiOpenWeather } from '@/api';
import { getUserLocation } from '@/helpers';
import { loadWeatherDataCity, setInitialize, setWeatherData } from '@/store/actions';
import { OpenWeather } from '@/types';

function* loadOpenWeatherDataBasic() {
  const location: GeolocationPosition = yield call(getUserLocation);

  const response: AxiosResponse<OpenWeather.RootObject> = yield call(
    apiOpenWeather.fetchWeather,
    location.coords.latitude,
    location.coords.longitude
  );

  yield put(setWeatherData(response.data));
  yield put(setInitialize(true));
}

export function* loadOpenWeatherDataCity(action: ReturnType<typeof loadWeatherDataCity>) {
  const response: AxiosResponse<OpenWeather.RootObject> = yield call(
    apiOpenWeather.fetchWeatherCity,
    action.payload.city
  );

  yield put(setWeatherData(response.data));
}

export function* watchOpenWeather() {
  yield takeEvery('LOAD_WEATHER_DATA_BASIC', loadOpenWeatherDataBasic);
  yield debounce(600, 'LOAD_WEATHER_DATA_CITY', loadOpenWeatherDataCity);
}
