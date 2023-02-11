// OpenWeatherCurrent
export interface CurrentWeather {
  coordinates: Coordinates;
  weather: WeatherConditions[];
  main: MainWeatherData;
  wind: WindInfo;
  dt: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface WeatherConditions {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface WindInfo {
  speed: number;
  deg: number;
  gust: number;
}

// OpenWeatherForecast
export interface ForecastWeather {
  cod: string;
  message: number;
  cnt: number;
  list: DayOfForecast[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
}


// forecast weather
export interface DayOfForecast {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  snow: Snow;
  sys: Sys;
  dt_txt: Date;
}

export interface Clouds {
  all: number;
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Snow {
}

export interface Sys {
  pod: string;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}

export type CurrentWeatherType = {
  temp: number
  icon: string
  description: string
  city: string
  feelsLike: number
  pressure: number
  wind: number
  date: number
}

export type ForecastWeatherType = Omit<CurrentWeatherType, 'city' | 'feelsLike' | 'pressure' | 'wind'>;