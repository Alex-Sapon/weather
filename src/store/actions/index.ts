import { OpenWeather } from '@/types';

export const changeTheme = (value: string) => ({
  type: 'APP/CHANGE-APP-THEME',
  payload: value,
} as const);

export const setCoordinates = (latitude: number, longitude: number) => ({
  type: 'APP/SET_COORDINATES',
  payload: {
    latitude,
    longitude,
  },
} as const);

export const setWeatherData = (data: OpenWeather.RootObject) => ({
  type: 'OPEN_WEATHER/SET_WEATHER_DATA',
  payload: data
} as const);

export const setInitialize = (value: boolean) => ({
  type: 'APP/SET_INITIALISE',
  payload: value
} as const);
