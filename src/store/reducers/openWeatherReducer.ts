import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { apiOpenWeather } from '@/api/openweather';
import { getUserLocation } from '@/helpers';
import { setInitialize, setWeatherData } from '@/store/actions';
import { OpenWeather } from '@/types';

const initialState = {
  data: {} as OpenWeather.RootObject
};

export const openWeatherReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
  case 'OPEN_WEATHER/SET_WEATHER_DATA':
    return { ...state, data: action.payload };
  default:
    return state;
  }
};

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

function* loadOpenWeatherDataCity() {
  const response: AxiosResponse<OpenWeather.RootObject> = yield call(
    apiOpenWeather.fetchWeatherCountry,
    'London'
  );
  // eslint-disable-next-line no-console
  console.log(response.data);
}

export function* watchOpenWeather() {
  yield takeEvery('LOAD_WEATHER_DATA_BASIC', loadOpenWeatherDataBasic);
  yield takeEvery('LOAD_WEATHER_DATA_CITY', loadOpenWeatherDataCity);
}

type StateType = {
  data: OpenWeather.RootObject
}

type ActionType = ReturnType<typeof setWeatherData>
