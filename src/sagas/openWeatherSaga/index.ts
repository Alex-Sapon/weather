import { AxiosError, AxiosResponse } from 'axios';
import { call, debounce, fork, put, takeEvery } from 'redux-saga/effects';

import { apiOpenWeather } from '@/api';
import { getUserLocation, handleAppError } from '@/helpers';
import { setOpenWeatherDataCity, setInitialize, setWeatherData } from '@/store/actions';
import { CurrentWeather, ForecastWeather } from '@/types';

function* loadCurrentData() {
  const location: GeolocationPosition = yield call(getUserLocation);

  const weather: AxiosResponse<CurrentWeather> = yield call(
    apiOpenWeather.fetchWeatherCurrent,
    location.coords.latitude,
    location.coords.longitude,
  );

  const forecast: AxiosResponse<ForecastWeather> = yield call(
    apiOpenWeather.fetchWeatherForecast,
    weather.data.id,
  );

  yield put(setWeatherData({
    date: weather.data.dt,
    city: weather.data.name,
    description: weather.data.weather[0].description,
    feelsLike: weather.data.main.feels_like,
    icon: weather.data.weather[0].icon,
    temp: weather.data.main.temp,
    wind: weather.data.wind.speed,
    pressure: weather.data.main.pressure,
  },
  forecast.data.list.map(data => ({
    date: data.dt,
    temp: data.main.temp,
    icon: data.weather[0].icon,
    description: data.weather[0].description,
  })),
  ));
  yield put(setInitialize(true));
}

export function* loadOpenWeatherWithCity(action: ReturnType<typeof setOpenWeatherDataCity>) {
  try {
    const weather: AxiosResponse<CurrentWeather> = yield call(
      apiOpenWeather.fetchWeatherCity,
      action.payload,
    );

    const forecast: AxiosResponse<ForecastWeather> = yield call(
      apiOpenWeather.fetchWeatherForecast,
      weather.data.id,
    );

    yield put(setWeatherData({
      date: weather.data.dt,
      city: weather.data.name,
      description: weather.data.weather[0].description,
      feelsLike: weather.data.main.feels_like,
      icon: weather.data.weather[0].icon,
      temp: weather.data.main.temp,
      wind: weather.data.wind.speed,
      pressure: weather.data.main.pressure,
    },
    forecast.data.list.map(data => ({
      date: data.dt,
      temp: data.main.temp,
      icon: data.weather[0].icon,
      description: data.weather[0].description,
    })),
    ));
  } catch (error) {
    yield handleAppError(error as AxiosError);
  }
}

export function* watchOpenWeather() {
  yield fork(loadCurrentData);
  yield takeEvery('LOAD_WEATHER_DATA_BASIC', loadCurrentData);
  yield debounce(600, 'LOAD_WEATHER_DATA_CITY', loadOpenWeatherWithCity);
}
