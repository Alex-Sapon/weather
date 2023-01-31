import { setWeatherCurrentData, setWeatherForecastData } from '@/store/actions';
import { OpenWeather, OpenWeatherForecast } from '@/types';

const initialState = {
  currentData: {} as OpenWeather.RootData,
  forecastData: {} as OpenWeatherForecast
};

export const openWeatherReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
  case 'OPEN_WEATHER/SET_CURRENT_WEATHER_DATA':
    return { ...state, currentData: action.payload };
  case 'OPEN_WEATHER/SET_FORECAST_WEATHER_DATA':
    return { ...state, forecastData: action.payload };
  default:
    return state;
  }
};

type StateType = {
  currentData: OpenWeather.RootData
  forecastData: OpenWeatherForecast
}

type ActionType =
  | ReturnType<typeof setWeatherCurrentData>
  | ReturnType<typeof setWeatherForecastData>;
