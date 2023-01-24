import { AxiosResponse } from 'axios';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import { apiOpenWeather, OpenWeather } from '@/api/openweather';
import { setInitialize, setWeatherData } from '@/store/actions';

const initialState = {
  data: {} as OpenWeather.RootObject
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const openWeatherReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
  case 'OPEN_WEATHER/SET_WEATHER_DATA':
    return { ...state, data: action.payload };
  default:
    return state;
  }
};

export function* loadOpenWeatherData() {
  const { latitude, longitude } = yield select((state: any) => state.appReducer);

  const response: AxiosResponse<OpenWeather.RootObject> = yield call(apiOpenWeather.fetchWeather, latitude, longitude);

  yield put(setWeatherData(response.data));
  yield put(setInitialize(true));
}

export function* watchOpenWeather() {
  yield takeEvery('LOAD_WEATHER_DATA', loadOpenWeatherData);
}

type StateType = {
  data: OpenWeather.RootObject
}

type ActionType = ReturnType<typeof setWeatherData>
