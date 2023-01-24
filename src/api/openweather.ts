import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const apiOpenWeather = {
  fetchWeather(latitude: number, longitude: number) {
    return instance.get<AxiosResponse<OpenWeather.RootObject>>(
      `weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
  }
};

export declare module OpenWeather {
  export interface Coordinates {
    lon: number;
    lat: number;
  }

  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }

  export interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }

  export interface Rain {
    id: number;
  }

  export interface Clouds {
    all: number;
  }

  export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }

  export interface RootObject {
    coordinates: Coordinates;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
}
