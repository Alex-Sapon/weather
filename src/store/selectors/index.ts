import { RootState } from '@/store';

export const selectAppTheme = (state: RootState) => state.appReducer.theme;
export const selectIsInitialized = (state: RootState) => state.appReducer.isInitialized;
export const selectAppError = (state: RootState) => state.appReducer.error;
export const selectApiName = (state: RootState) => state.appReducer.apiName;

export const selectCityName = (state: RootState) => state.weatherReducer.cityName;
export const selectForecastList = (state: RootState) => state.weatherReducer.forecastWeather;
export const selectCurrentTemp = (state: RootState) => state.weatherReducer.currentWeather.temp;
export const selectCurrentCity = (state: RootState) => state.weatherReducer.currentWeather.city;
export const selectCurrentFeelsLike = (state: RootState) => state.weatherReducer.currentWeather.feelsLike;
export const selectCurrentPressure = (state: RootState) => state.weatherReducer.currentWeather.pressure;
export const selectCurrentSpeed = (state: RootState) => state.weatherReducer.currentWeather.wind;
export const selectCurrentDesc = (state: RootState) => state.weatherReducer.currentWeather.description;
export const selectCurrentIcon = (state: RootState) => state.weatherReducer.currentWeather.icon;
