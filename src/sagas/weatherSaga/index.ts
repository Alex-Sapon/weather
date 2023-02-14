import { AxiosError, AxiosResponse } from 'axios';
import { call, debounce, fork, put, select, takeEvery } from 'redux-saga/effects';

import { apiOpenWeather, apiRapid, RapidWeather } from '@/api';
import {
  convertAndSetOpenWeatherData,
  convertAndSetRapidWeatherData,
  getUserLocation,
  handleAppError
} from '@/helpers';
import { VisitorData } from '@/helpers/getUserLocation';
import { setInitialize, setWeatherDataBasic, setWeatherDataCity } from '@/store/actions';
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
      
      yield put(convertAndSetOpenWeatherData(weather.data, forecast.data));
    }
    
    if (apiName === 'rapidWeather') {
      const weather: AxiosResponse<RapidWeather> = yield call(
        apiRapid.fetchWeather,
        Number(location.cityLatLong.split(',')[0]),
        Number(location.cityLatLong.split(',')[1]),
      );

      yield put(convertAndSetRapidWeatherData(weather.data));
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
      
      yield put(convertAndSetOpenWeatherData(weather.data, forecast.data));
    }

    if (apiName === 'rapidWeather') {
      const weather: AxiosResponse<RapidWeather> = yield call(
        apiRapid.fetchWeatherWithCity,
        action.payload,
      );

      yield put(convertAndSetRapidWeatherData(weather.data));
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
