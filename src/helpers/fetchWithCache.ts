import { apiOpenWeather, apiRapid } from '@/api';
import { cacheTimeMs } from '@/constants';

type CacheType = {
  [key: string]: {
    cacheTimer: number
  }
}

const cache: CacheType = {};
let cacheTimer = 0;

const getCacheTimer = (time: number) => {
  const now = new Date().getTime();

  if (cacheTimeMs < now + time) {
    cacheTimer = now + time;
  }
  return cacheTimer;
};

export const fetchWeatherWithCache = async (
  time: number, 
  apiName: string, 
  cityName: string, 
  lat?: number, 
  lon?: number
) => {
  const now = new Date().getTime();

  const key = cityName ? `${cityName}_${apiName}` : `${lat}_${lon}_${apiName}`;

  if (!cache[key] || cache[key].cacheTimer < now) {
    if (apiName === 'openWeather' && lat && lon) {
      cache[key] = {
        ...await apiOpenWeather.fetchCurrentWeather(lat, lon),
        cacheTimer: getCacheTimer(time)
      };
    }

    if (apiName === 'openWeather' && cityName) {
      cache[key] = {
        ...await apiOpenWeather.fetchCityWeather(cityName),
        cacheTimer: getCacheTimer(time)
      };
    }

    if (apiName === 'rapidWeather' && lat && lon) {
      cache[key] = {
        ...await apiRapid.fetchWeather(lat, lon),
        cacheTimer: getCacheTimer(time)
      };
    }

    if (apiName === 'rapidWeather' && cityName) {
      cache[key] = {
        ...await apiRapid.fetchWeatherWithCity(cityName),
        cacheTimer: getCacheTimer(time)
      };
    }
  }

  return cache[key];
};

export const fetchForecastWeatherWithCache = async (cityId: number,  apiName: string, time: number) => {
  const now = new Date().getTime();

  const key = `${cityId}_${apiName}`;

  if (!cache[key] || cache[key].cacheTimer < now) {
    cache[key] = {
      ...await apiOpenWeather.fetchForecastWeather(cityId),
      cacheTimer: getCacheTimer(time)
    };
  }

  return cache[key];
};
