import axios, { AxiosResponse } from 'axios';

import { OpenWeather, OpenWeatherForecast } from '@/types';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const weather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

const forecast = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
});

export const apiOpenWeather = {
  fetchWeatherCurrent(latitude: number, longitude: number): Promise<AxiosResponse<OpenWeather.RootData>> {
    return weather.get(`?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
  },
  fetchWeatherCity(city: string): Promise<AxiosResponse<OpenWeather.RootData>> {
    return weather.get(`?q=${city}&appid=${API_KEY}`);
  },
  fetchForecastFourDays(id: number): Promise<AxiosResponse<OpenWeatherForecast>> {
    return forecast.get(`?id=${id}&appid=${API_KEY}`);
  }
};
