import { AxiosError, AxiosResponse } from 'axios';
import { call, debounce, fork, put, select, takeEvery } from 'redux-saga/effects';

import { apiOpenWeather, apiRapid, RapidWeather } from '@/api';
import { getUserLocation, handleAppError } from '@/helpers';
import { VisitorData } from '@/helpers/getUserLocation';
import { setInitialize, setWeatherData, setWeatherDataBasic, setWeatherDataCity } from '@/store/actions';
import { CurrentWeather, ForecastWeather } from '@/types';

function* loadWeatherDataBasic() {
  try {
    const location: VisitorData = yield call(getUserLocation);
    const apiName: string = yield select(state => state.appReducer.apiName);

    if (apiName === 'openWeather') {
      const weather: AxiosResponse<CurrentWeather> = yield call(
        apiOpenWeather.fetchWeatherCurrent,
        Number(location.cityLatLong.split(',')[0]),
        Number(location.cityLatLong.split(',')[1]),
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
        Number(location.cityLatLong.split(',')[0]),
        Number(location.cityLatLong.split(',')[1]),
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

function* loadWeatherDataCity(action: ReturnType<typeof setWeatherDataCity>) {
  try {
    const apiName: string = yield select(state => state.appReducer.apiName);

    if (apiName === 'openWeather') {
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
    }

    if (apiName === 'rapidWeather') {
      const weather: AxiosResponse<RapidWeather> = yield call(
        apiRapid.fetchWeatherWithCity,
        action.payload,
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
  } catch (error) {
    yield handleAppError(error as AxiosError);
  }
}

function* toggleFromBasicToCityApi() {
  const cityName: string = yield select(state => state.weatherReducer.cityName);

  if (cityName) {
    yield put(setWeatherDataCity(cityName));
  } else {
    yield put(setWeatherDataBasic());
  }
}

export function* watchOpenWeather() {
  yield fork(loadWeatherDataBasic);
  yield takeEvery('TOGGLE_WEATHER_API', toggleFromBasicToCityApi);
  yield takeEvery('LOAD_WEATHER_DATA_BASIC', loadWeatherDataBasic);
  yield debounce(600, 'LOAD_WEATHER_DATA_CITY', loadWeatherDataCity);
}
