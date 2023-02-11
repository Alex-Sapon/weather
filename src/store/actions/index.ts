import { CurrentWeatherType, ForecastWeatherType } from '@/types';

export const changeTheme = (value: string) => ({
  type: 'APP/CHANGE-APP-THEME',
  payload: value,
} as const);

export const setInitialize = (value: boolean) => ({
  type: 'APP/SET_INITIALISE',
  payload: value
} as const);

export const setApiName = (apiName: string) => ({
  type: 'APP/SET_API_NAME',
  payload: apiName
} as const);

export const setAppError = (error: string) => ({
  type: 'APP/SET_ERROR',
  payload: error
} as const);

export const setWeatherData = (current: CurrentWeatherType, forecast: ForecastWeatherType[]) => ({
  type: 'OPEN_WEATHER/SET_WEATHER_DATA',
  payload: {
    current,
    forecast
  }
} as const);

export const setWeatherDataBasic = () => ({
  type: 'LOAD_WEATHER_DATA_BASIC',
} as const);

export const setWeatherDataCity = (city: string) => ({
  type: 'LOAD_WEATHER_DATA_CITY',
  payload: city
} as const);
