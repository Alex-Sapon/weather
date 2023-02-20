import { AxiosError, AxiosResponse } from 'axios';
import { call, debounce, fork, put, select, takeEvery } from 'redux-saga/effects';

import { CurrentWeather, ForecastWeather, IpAPI, RapidWeather } from '@/api/types';
import { cacheTimeMs } from '@/constants';
import { setInitialize, setWeatherDataBasic, setWeatherDataCity } from '@/store/actions';
import {
  convertAndSetOpenWeatherData,
  convertAndSetRapidWeatherData,
  fetchForecastWeatherWithCache,
  fetchWeatherWithCache,
  handleAppError,
} from '@/utils';
import { fetchUserLocationWithCache } from '@/utils/fetchWithCache';

function* loadWeatherDataBasic() {
  try {
    const location: AxiosResponse<IpAPI> = yield call(
      fetchUserLocationWithCache,
      cacheTimeMs
    );
    const apiName: string = yield select(state => state.appReducer.apiName);

    if (apiName === 'openWeather') {
      const weather: AxiosResponse<CurrentWeather> = yield call(
        fetchWeatherWithCache,
        '',
        apiName,
        cacheTimeMs,
        location.data.lat,
        location.data.lon
      );

      const forecast: AxiosResponse<ForecastWeather> = yield call(
        fetchForecastWeatherWithCache,
        weather.data.id,
        apiName,
        cacheTimeMs
      );

      yield put(convertAndSetOpenWeatherData(weather.data, forecast.data));
    }
    
    if (apiName === 'rapidWeather') {
      const weather: AxiosResponse<RapidWeather> = yield call(
        fetchWeatherWithCache,
        '',
        apiName,
        cacheTimeMs,
        location.data.lat,
        location.data.lon
      );

      yield put(convertAndSetRapidWeatherData(weather.data));
    }

    yield put(setInitialize(true));
  } catch (error) {
    yield put(handleAppError(error as AxiosError));
  }
}

function* loadWeatherDataCity(action: ReturnType<typeof setWeatherDataCity>) {
  try {
    const apiName: string = yield select(state => state.appReducer.apiName);

    if (apiName === 'openWeather') {
      const weather: AxiosResponse<CurrentWeather> = yield call(
        fetchWeatherWithCache,
        action.payload,
        apiName,
        cacheTimeMs,
      );

      const forecast: AxiosResponse<ForecastWeather> = yield call(
        fetchForecastWeatherWithCache,
        weather.data.id,
        apiName,
        cacheTimeMs,
      );
      
      yield put(convertAndSetOpenWeatherData(weather.data, forecast.data));
    }

    if (apiName === 'rapidWeather') {
      const weather: AxiosResponse<RapidWeather> = yield call(
        fetchWeatherWithCache,
        action.payload,
        apiName,
        cacheTimeMs,
      );

      yield put(convertAndSetRapidWeatherData(weather.data));
    }
  } catch (error) {
    yield put(handleAppError(error as AxiosError));
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
