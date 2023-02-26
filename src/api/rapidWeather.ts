import axios from 'axios';

import { RapidWeather } from '@/api/interfaces';

const basicOptions = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

const optionsWithCoordinates = (lat: number, lon: number) => ({
  ...basicOptions,
  params: {
    q: `${lat},${lon}`,
    days: '4',
    lang: 'ru',
  },
});

const optionsWithCity = (city: string, signal?: AbortSignal) => ({
  ...basicOptions,
  params: {
    q: city,
    days: '4',
    lang: 'ru',
  },
  signal,
});

export const apiRapid = {
  fetchWeather(lat: number, lon: number): Promise<RapidWeather> {
    return axios.request(optionsWithCoordinates(lat, lon));
  },
  fetchWeatherWithCity(city: string, signal?: AbortSignal): Promise<RapidWeather> {
    return axios.request(optionsWithCity(city, signal));
  },
};
