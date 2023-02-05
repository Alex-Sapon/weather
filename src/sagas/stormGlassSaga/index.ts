// import { AxiosResponse , AxiosError } from 'axios';
import { fork } from 'redux-saga/effects';

// import { apiStormGlass } from '@/api';
// import { StormGlassType } from '@/api/stormglass';
// import { getUserLocation, handleAppError } from '@/helpers';

function* loadCurrentData() {
  // try {
  //   const location: GeolocationPosition = yield call(getUserLocation);
  //
  //   const weather: AxiosResponse<StormGlassType> = yield call(
  //     apiStormGlass.fetchWeather,
  //     location.coords.latitude,
  //     location.coords.longitude
  //   );
  //
  //   console.log(weather.data);
  // } catch (error) {
  //   yield handleAppError(error as AxiosError);
  // }
}

export function* stormGlassWatcher() {
  yield fork(loadCurrentData);
}
