// ip-api.com user location
export interface IpAPI {
  status: string
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  isp: string
  org: string
  as: string
  query: string
}

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

// rapid weather
export type RapidWeather = {
  location: Location;
  current: Current;
  forecast: Forecast
}

interface Forecast {
  forecastday: ForecastDay[];
}

interface ForecastDay {
  date: Date;
  date_epoch: number;
  day: {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    totalsnow_cm: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    daily_will_it_rain: number
    daily_chance_of_rain: number
    daily_will_it_snow: number
    daily_chance_of_snow: number
    condition: {
      text: string
      icon: string
      code: number
    },
    uv: number
  };
  astro: {
    sunrise: Date
    sunset: Date
    moonrise: Date
    moonset: Date
    moon_phase: string
    moon_illumination: string
    is_moon_up: number
    is_sun_up: number
  };
  hour: [
    {
      time_epoch: number
      time: Date
      temp_c: number
      temp_f: number
      is_day: number
      condition: {
        text: string
        icon: string
      }
      code: 1003
      wind_mph: 2.9
      wind_kph: 4.7
      wind_degree: 22
      wind_dir: 'NNE'
      pressure_mb: 1045
      pressure_in: 30.87
      precip_mm: 0
      precip_in: 0
      humidity: 84
      cloud: 39
      feelslike_c: 1.7
      feelslike_f: 35.1
      windchill_c: 1.7
      windchill_f: 35.1
      heatindex_c: 2.8
      heatindex_f: 37
      dewpoint_c: 0.4
      dewpoint_f: 32.7
      will_it_rain: 0
      chance_of_rain: 0
      will_it_snow: 0
      chance_of_snow: 0
      vis_km: 10
      vis_miles: 6
      gust_mph: 4.9
      gust_kph: 7.9
      uv: 1
    }
  ];
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