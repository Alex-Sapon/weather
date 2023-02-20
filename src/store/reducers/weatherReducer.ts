import { CurrentWeatherType, ForecastWeatherType } from '@/api/types';
import { ActionType, WeatherStateType } from '@/store/types';

const initialState = {
  currentWeather: {} as CurrentWeatherType,
  forecastWeather: [] as ForecastWeatherType[],
  cityName: '',
};

export const weatherReducer = (state: WeatherStateType = initialState, action: ActionType): WeatherStateType => {
  switch (action.type) {
  case 'WEATHER/SET_WEATHER_DATA':
    return {
      ...state,
      currentWeather: action.payload.current,
      forecastWeather: action.payload.forecast
    };
  case 'WEATHER/SET_CITY_NAME':
    return { ...state, cityName: action.payload };
  default:
    return state;
  }
};
