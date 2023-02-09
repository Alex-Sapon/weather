import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

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
      '2023-02-09,2023-02-13'
      // `${(new Date()).toISOString().split('T')[0].slice(0, -2)}${new Date().getDate() + 4}`
    );

    yield put(setWeatherCurrentData({
      date: weather.data.location.localtime_epoch,
      city: weather.data.location.name,
      description: weather.data.current.condition.text,
      feelsLike: weather.data.current.feelslike_c,
      icon: weather.data.current.condition.icon,
      temp: weather.data.current.temp_c,
      wind: weather.data.current.wind_kph,
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
  yield takeEvery('LOAD_STORM_GLASS_DATA_BASIC', loadCurrentData);
}
