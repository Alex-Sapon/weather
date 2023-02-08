import { CurrentWeatherType, ForecastWeatherType } from '@/types';

export const changeTheme = (value: string) => ({
  type: 'APP/CHANGE-APP-THEME',
  payload: value,
} as const);

export const setWeatherCurrentData = (data: CurrentWeatherType) => ({
  type: 'OPEN_WEATHER/SET_CURRENT_WEATHER_DATA',
  payload: data
} as const);

export const setWeatherForecastData = (data: ForecastWeatherType[]) => ({
  type: 'OPEN_WEATHER/SET_FORECAST_WEATHER_DATA',
  payload: data
} as const);

export const setInitialize = (value: boolean) => ({
  type: 'APP/SET_INITIALISE',
  payload: value
} as const);

export const setAppError = (error: string) => ({
  type: 'APP/SET_ERROR',
  payload: error
} as const);

export const setWeatherDataBasic = () => ({
  type: 'LOAD_WEATHER_DATA_BASIC',
} as const);

export const setWeatherDataCity = (city: string) => ({
  type: 'LOAD_WEATHER_CITY_DATA',
  payload: city
} as const);

export const setStormGlassDataBasic = () => ({
  type: 'LOAD_STORM_GLASS_DATA_BASIC',
} as const);
