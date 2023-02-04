import { RootState } from '@/store';

export const selectAppTheme = (state: RootState) => state.appReducer.theme;
export const selectIsInitialized = (state: RootState) => state.appReducer.isInitialized;
export const selectAppError = (state: RootState) => state.appReducer.error;

export const selectForecastList = (state: RootState) => state.weatherReducer.forecastData.list;

export const selectCurrentTemp = (state: RootState) => state.weatherReducer.currentData.main.temp;
export const selectCurrentName = (state: RootState) => state.weatherReducer.currentData.name;
export const selectCurrentFeelsLike = (state: RootState) => state.weatherReducer.currentData.main.feels_like;
export const selectCurrentPressure = (state: RootState) => state.weatherReducer.currentData.main.pressure;
export const selectCurrentSpeed = (state: RootState) => state.weatherReducer.currentData.wind.speed;
export const selectCurrentDesc = (state: RootState) => state.weatherReducer.currentData.weather[0].description;
export const selectCurrentIcon = (state: RootState) => state.weatherReducer.currentData.weather[0].main;
