import { AxiosResponse } from 'axios';
import { call, debounce, fork, put } from 'redux-saga/effects';

import { apiOpenWeather } from '@/api';
import { getUserLocation } from '@/helpers';
import {
  loadWeatherDataCity,
  setInitialize,
  setWeatherCurrentData,
  setWeatherForecastData
} from '@/store/actions';
import { OpenWeather, OpenWeatherForecast } from '@/types';

function* loadOpenWeatherCurrentData() {
  const location: GeolocationPosition = yield call(getUserLocation);

  const weather: AxiosResponse<OpenWeather.RootData> = yield call(
    apiOpenWeather.fetchWeatherCurrent,
    location.coords.latitude,
    location.coords.longitude,
  );

  const forecast: AxiosResponse<OpenWeatherForecast> = yield call(
    apiOpenWeather.fetchForecastFourDays,
    weather.data.id,
  );

  yield put(setWeatherCurrentData(weather.data));
  yield put(setWeatherForecastData(forecast.data));
  yield put(setInitialize(true));
}

export function* loadOpenWeatherCityData(action: ReturnType<typeof loadWeatherDataCity>) {
  const response: AxiosResponse<OpenWeather.RootData> = yield call(
    apiOpenWeather.fetchWeatherCity,
    action.payload.city,
  );

  yield put(setWeatherCurrentData(response.data));
}

export function* watchOpenWeather() {
  yield fork(loadOpenWeatherCurrentData);
  yield debounce(600, 'LOAD_WEATHER_DATA_CITY', loadOpenWeatherCityData);
}
