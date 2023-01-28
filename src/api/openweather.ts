import axios, { AxiosResponse } from 'axios';

import { OpenWeather } from '@/types';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

export const apiOpenWeather = {
  fetchWeather(latitude: number, longitude: number): Promise<AxiosResponse<OpenWeather.RootObject>> {
    return instance.get(`?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
  },
  fetchWeatherCity(city: string): Promise<AxiosResponse<OpenWeather.RootObject>> {
    return instance.get(`?q=${city}&appid=${API_KEY}`);
  },
};
