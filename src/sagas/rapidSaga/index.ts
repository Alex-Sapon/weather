import { AxiosError, AxiosResponse } from 'axios';
import { call, debounce, put, takeEvery } from 'redux-saga/effects';

import { apiRapid, RapidWeather } from '@/api/rapid';
import { getUserLocation, handleAppError } from '@/helpers';
import { setWeatherCurrentData, setWeatherForecastData } from '@/store/actions';

function* loadCurrentData() {
  try {
    const location: GeolocationPosition = yield call(getUserLocation);

    const weather: AxiosResponse<RapidWeather> = yield call(
      apiRapid.fetchWeather,
      location.coords.latitude,
      location.coords.longitude,
    );

    yield put(setWeatherCurrentData({
      date: weather.data.location.localtime_epoch,
      city: weather.data.location.name,
      description: weather.data.current.condition.text,
      feelsLike: weather.data.current.feelslike_c,
      icon: weather.data.current.condition.icon,
      temp: weather.data.current.temp_c,
      wind: Math.round(weather.data.current.wind_kph / 3.6),
      pressure: weather.data.current.pressure_mb,
    }));
    yield put(setWeatherForecastData(weather.data.forecast.forecastday.map(data => ({
      date: data.date_epoch,
      temp: data.day.avgtemp_c,
      icon: data.day.condition.icon,
      description: data.day.condition.text,
    }))));
  } catch (error) {
    yield handleAppError(error as AxiosError);
  }
}

export function* stormGlassWatcher() {
  yield takeEvery('LOAD_RAPID_DATA_BASIC', loadCurrentData);
  yield debounce(600, '', loadCurrentData);
}
