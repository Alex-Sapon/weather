// current weather
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

  export interface RootData {
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


// OpenWeatherForecast
export interface ForecastType {
  cod: string;
  message: number;
  cnt: number;
  list: DayOfForecast[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: OpenWeather.Coordinates;
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
  iconName: string
  description: string
  city: string
  feelsLike: number
  pressure: number
  wind: number
  date: number | Date
}

export type ForecastWeatherType = Omit<CurrentWeatherType, 'city' | 'feelsLike' | 'pressure' | 'wind'>;