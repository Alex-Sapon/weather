import { OpenWeather } from '@/types';

export const changeTheme = (value: string) => ({
  type: 'APP/CHANGE-APP-THEME',
  payload: value,
} as const);

export const setWeatherData = (data: OpenWeather.RootObject) => ({
  type: 'OPEN_WEATHER/SET_WEATHER_DATA',
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

export const loadWeatherDataBasic = () => ({
  type: 'LOAD_WEATHER_DATA_BASIC',
} as const);

export const loadWeatherDataCity = (city: string) => ({
  type: 'LOAD_WEATHER_DATA_CITY',
  payload: {
    city
  }
} as const);
