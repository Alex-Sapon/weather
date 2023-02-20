import axios from 'axios';

import { RapidWeather } from '@/api/types';

const options = (city: string, lat?: number, lon?: number) => ({
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {
    q: city || `${lat},${lon}`,
    days: '4',
    lang: 'ru',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
});

export const apiRapid = {
  fetchWeather(lat: number, lon: number): Promise<RapidWeather> {
    return axios.request(options('', lat, lon));
  },
  fetchWeatherWithCity(city: string): Promise<RapidWeather> {
    return axios.request(options(city));
  },
};
