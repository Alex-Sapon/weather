import { setWeatherData } from '@/store/actions';
import { OpenWeather } from '@/types';

const initialState = {
  data: {} as OpenWeather.RootObject
};

export const openWeatherReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
  case 'OPEN_WEATHER/SET_WEATHER_DATA':
    return { ...state, data: action.payload };
  default:
    return state;
  }
};

type StateType = {
  data: OpenWeather.RootObject
}

type ActionType = ReturnType<typeof setWeatherData>
