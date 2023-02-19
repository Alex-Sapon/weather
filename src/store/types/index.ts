import {
  changeTheme,
  setApiName,
  setAppError,
  setCityName,
  setInitialize,
  setWeatherData,
  setWeatherDataCity,
} from '@/store/actions';
import { CurrentWeatherType, ForecastWeatherType } from '@/types';

export type AppStateType = {
  isInitialized: boolean
  isLoading: boolean
  theme: string
  apiName: string
  error: string
};

export type WeatherStateType = {
  currentWeather: CurrentWeatherType
  forecastWeather: ForecastWeatherType[]
  cityName: string
}

export type ActionType =
  | ReturnType<typeof changeTheme>
  | ReturnType<typeof setInitialize>
  | ReturnType<typeof setAppError>
  | ReturnType<typeof setApiName>
  | ReturnType<typeof setWeatherData>
  | ReturnType<typeof setWeatherDataCity>
  | ReturnType<typeof setCityName>;
