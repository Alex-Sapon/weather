import { AxiosError, AxiosResponse } from 'axios';
import { call, debounce, fork, put, select, takeEvery } from 'redux-saga/effects';

import { apiOpenWeather, apiRapid } from '@/api';
import { RapidWeather } from '@/api/rapid';
import { getUserLocation, handleAppError } from '@/helpers';
import { setInitialize, setWeatherData, setWeatherDataCity } from '@/store/actions';
import { CurrentWeather, ForecastWeather } from '@/types';

function* loadWeatherDataBasic() {
  try {
    const location: GeolocationPosition = yield call(getUserLocation);
    const apiName: string = yield select(state => state.appReducer.apiName);

    if (apiName === 'openWeather') {
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
    }
    
    if (apiName === 'rapidWeather') {
      const weather: AxiosResponse<RapidWeather> = yield call(
        apiRapid.fetchWeather,
        location.coords.latitude,
        location.coords.longitude,
      );

      yield put(setWeatherData({
        date: weather.data.location.localtime_epoch,
        city: weather.data.location.name,
        description: weather.data.current.condition.text,
        feelsLike: weather.data.current.feelslike_c,
        icon: weather.data.current.condition.icon,
        temp: weather.data.current.temp_c,
        wind: Math.round(weather.data.current.wind_kph / 3.6),
        pressure: weather.data.current.pressure_mb,
      },
      weather.data.forecast.forecastday.map(data => ({
        date: data.date_epoch,
        temp: data.day.avgtemp_c,
        icon: data.day.condition.icon,
        description: data.day.condition.text,
      }))
      ));
    } 
    
    yield put(setInitialize(true));
  } catch (error) {
    yield handleAppError(error as AxiosError);
  }
}

export function* loadWeatherDataCity(action: ReturnType<typeof setWeatherDataCity>) {
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
  yield fork(loadWeatherDataBasic);
  yield takeEvery('LOAD_WEATHER_DATA_BASIC', loadWeatherDataBasic);
  yield debounce(600, 'LOAD_WEATHER_DATA_CITY', loadWeatherDataCity);
}
