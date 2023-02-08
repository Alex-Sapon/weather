import { setWeatherCurrentData, setWeatherForecastData } from '@/store/actions';
import { ForecastWeatherType, CurrentWeatherType } from '@/types';

const initialState = {
  currentWeather: {} as CurrentWeatherType,
  forecastWeather: [] as ForecastWeatherType[],
};

export const weatherReducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
  case 'OPEN_WEATHER/SET_CURRENT_WEATHER_DATA':
    return { ...state, currentWeather: action.payload };
  case 'OPEN_WEATHER/SET_FORECAST_WEATHER_DATA':
    return { ...state, forecastWeather: action.payload };
  default:
    return state;
  }
};

type StateType = {
  currentWeather: CurrentWeatherType
  forecastWeather: ForecastWeatherType[]
}

type ActionType =
  | ReturnType<typeof setWeatherCurrentData>
  | ReturnType<typeof setWeatherForecastData>;

