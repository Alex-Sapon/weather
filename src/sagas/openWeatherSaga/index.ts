import { AxiosResponse } from 'axios';
import { call, debounce, fork, put } from 'redux-saga/effects';

import { apiOpenWeather } from '@/api';
import { getUserLocation } from '@/helpers';
import {
  setWeatherDataCity,
  setInitialize,
  setWeatherCurrentData,
  setWeatherForecastData,
} from '@/store/actions';
import { OpenWeather, ForecastType } from '@/types';

function* loadCurrentData() {
  const location: GeolocationPosition = yield call(getUserLocation);

  const weather: AxiosResponse<OpenWeather.RootData> = yield call(
    apiOpenWeather.fetchWeatherCurrent,
    location.coords.latitude,
    location.coords.longitude,
  );

  const forecast: AxiosResponse<ForecastType> = yield call(
    apiOpenWeather.fetchForecastDays,
    weather.data.id
  );

  yield put(setWeatherCurrentData(weather.data));
  yield put(setWeatherForecastData(forecast.data));
  yield put(setInitialize(true));
}

export function* loadOpenWeatherCityData(action: ReturnType<typeof setWeatherDataCity>) {
  const weather: AxiosResponse<OpenWeather.RootData> = yield call(
    apiOpenWeather.fetchWeatherCity,
    action.payload,
  );

  const forecast: AxiosResponse<ForecastType> = yield call(
    apiOpenWeather.fetchForecastDays,
    weather.data.id
  );

  yield put(setWeatherCurrentData(weather.data));
  yield put(setWeatherForecastData(forecast.data));
}

export function* watchOpenWeather() {
  yield fork(loadCurrentData);
  yield debounce(600, 'LOAD_WEATHER_CITY_DATA', loadOpenWeatherCityData);
}
