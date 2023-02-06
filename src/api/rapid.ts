import axios, { AxiosResponse } from 'axios';

const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

const baseURL = 'https://weatherapi-com.p.rapidapi.com/';

const options = (lat: number, lon: number, point: string, days?: number) => ({
  method: 'GET',
  url: `${baseURL}${point}`,
  params: {
    q: `${lat},${lon}`,
    days
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
});

export const apiStormGlass = {
  fetchCurrentWeather(lat: number, lon: number): Promise<AxiosResponse<RapidData>> {
    return axios.request(options(lat, lon, 'current.json'));
  },
  fetchForecastWeather(lat: number, lon: number, days: number): Promise<AxiosResponse<RapidData>> {
    return axios.request(options(lat, lon, 'forecast.json', days));
  },
};

export interface RapidData {
  location: Location;
  current: Current;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}
