import axios, { AxiosResponse } from 'axios';

import { OpenWeather, ForecastType } from '@/types';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const apiOpenWeather = {
  fetchWeatherCurrent(lat: number, lon: number): Promise<AxiosResponse<OpenWeather.RootData>> {
    return instance.get(`weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`);
  },
  fetchWeatherCity(city: string): Promise<AxiosResponse<OpenWeather.RootData>> {
    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);
  },
  fetchForecastDays(id: number): Promise<AxiosResponse<ForecastType>> {
    return instance.get(`forecast?id=${id}&appid=${API_KEY}&cnt=6&units=metric&lang=ru`);
  }
};
