import axios from 'axios';

import { CurrentWeather, ForecastWeather } from '@/api/interfaces';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const apiOpenWeather = {
  fetchCurrentWeather(lat: number, lon: number): Promise<CurrentWeather> {
    return instance.get(`weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`);
  },
  fetchCityWeather(city: string, signal: AbortSignal): Promise<CurrentWeather> {
    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`, { signal });
  },
  fetchForecastWeather(id: number, signal: AbortSignal): Promise<ForecastWeather> {
    return instance.get(`forecast?id=${id}&appid=${API_KEY}&cnt=&units=metric&lang=ru&cnt=4`, { signal });
  }
};
