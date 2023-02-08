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

  yield put(setWeatherCurrentData({
    date: weather.data.dt,
    city: weather.data.name,
    description: weather.data.weather[0].description,
    feelsLike: weather.data.main.feels_like,
    iconName: weather.data.weather[0].main,
    temp: weather.data.main.temp,
    wind: weather.data.wind.speed,
    pressure: weather.data.main.pressure,
  }));
  yield put(setWeatherForecastData(forecast.data.list.map(data => ({
    date: data.dt_txt,
    temp: data.main.temp,
    iconName: data.weather[0].main,
    description: data.weather[0].description,
  }))));
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

  yield put(setWeatherCurrentData({
    date: weather.data.dt,
    city: weather.data.name,
    description: weather.data.weather[0].description,
    feelsLike: weather.data.main.feels_like,
    iconName: weather.data.weather[0].main,
    temp: weather.data.main.temp,
    wind: weather.data.wind.speed,
    pressure: weather.data.main.pressure,
  }));
  yield put(setWeatherForecastData(forecast.data.list.map(data => ({
    date: data.dt_txt,
    temp: data.main.temp,
    iconName: data.weather[0].main,
    description: data.weather[0].description,
  }))));
}

export function* watchOpenWeather() {
  yield fork(loadCurrentData);
  yield debounce(600, 'LOAD_WEATHER_CITY_DATA', loadOpenWeatherCityData);
}
