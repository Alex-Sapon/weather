import { setWeatherDataCity, setWeatherData, setCityName } from '@/store/actions';
import { ForecastWeatherType, CurrentWeatherType } from '@/types';

const initialState = {
  currentWeather: {} as CurrentWeatherType,
  forecastWeather: [] as ForecastWeatherType[],
  cityName: '',
};

export const weatherReducer = (state: StateType = initialState, action: ActionType): StateType => {
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

type StateType = {
  currentWeather: CurrentWeatherType
  forecastWeather: ForecastWeatherType[]
  cityName: string
}

type ActionType =
  | ReturnType<typeof setWeatherData>
  | ReturnType<typeof setWeatherDataCity>
  | ReturnType<typeof setCityName>;
