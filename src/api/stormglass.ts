import axios, { AxiosResponse } from 'axios';

const API_KEY = process.env.REACT_APP_STORM_GLASS_API_KEY;

const baseURL = 'https://api.stormglass.io/v2/weather/point';

const params = 'pressure,cloudCover,cloudCover,precipitation,windSpeed';

export const apiStormGlass = {
  fetchWeather(lat: number, lon: number): Promise<AxiosResponse<StormGlassType>> {
    return axios.get(`${baseURL}?lat=${lat}&lng=${lon}&params=${params}`, {
      headers: {
        Authorization: API_KEY,
      }
    });
  },
};

// &start=${today.toISOString()}&end=${tenDaysOut.toISOString()}

export type StormGlassType = {
  hours: HoursType[]
  meta: MetaType
}

type HoursType = {
  airTemperature: {
    dwd: number
    noaa: number
    sg: number
    smhi: number
  }
  time: Date
  waveHeight: {
    dwd: number
    fcoo: number
    fmi: number
    icon: number
    meteo: number
    noaa: number
    sg: number
  }
}

type MetaType = {
  cost: number
  dailyQuota: number
  end: Date
  lat: number
  lng: number
  params: string[]
  requestCount: number
  start: Date
}
