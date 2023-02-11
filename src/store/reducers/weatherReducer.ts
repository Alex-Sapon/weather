import { setWeatherDataCity, setWeatherData } from '@/store/actions';
import { ForecastWeatherType, CurrentWeatherType } from '@/types';

const initialState = {
  currentWeather: {} as CurrentWeatherType,
  forecastWeather: [] as ForecastWeatherType[],
};

export const weatherReducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
  case 'OPEN_WEATHER/SET_WEATHER_DATA':
    return {
      ...state,
      currentWeather: action.payload.current,
      forecastWeather: action.payload.forecast
    };
  default:
    return state;
  }
};

type StateType = {
  currentWeather: CurrentWeatherType
  forecastWeather: ForecastWeatherType[]
}

type ActionType =
  | ReturnType<typeof setWeatherData>
  | ReturnType<typeof setWeatherDataCity>;
