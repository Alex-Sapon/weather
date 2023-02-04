import { setWeatherCurrentData, setWeatherForecastData } from '@/store/actions';
import { OpenWeather, ForecastType } from '@/types';

const initialState = {
  currentData: {} as OpenWeather.RootData,
  forecastData: {} as ForecastType,
};

export const weatherReducer = (state: StateType = initialState, action: ActionType): StateType => {
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
  forecastData: ForecastType
}

type ActionType =
  | ReturnType<typeof setWeatherCurrentData>
  | ReturnType<typeof setWeatherForecastData>;
