import axios, { AxiosResponse } from 'axios';

const API_KEY = process.env.REACT_APP_STORM_GLASS_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.stormglass.io/v2/weather/point',
  headers: {
    'Authorization': API_KEY,
  },
});

export const apiStormGlass = {
  fetchWeather(latitude: number, longitude: number): Promise<AxiosResponse<unknown>> {
    return instance.get(`?lat=${latitude}&lng=${longitude}&params=waveHeight,airTemperature`);
  },
};
