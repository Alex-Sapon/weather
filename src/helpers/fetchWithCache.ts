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

export const fetchWeatherWithCache = async (lat: number, lon: number, time: number, apiName: string) => {
  const now = new Date().getTime();

  const key = `${lat}_${lon}_${apiName}`;

  if (!cache[key] || cache[key].cacheTimer < now) {
    if (apiName === 'openWeather') {
      cache[key] = {
        ...await apiOpenWeather.fetchCurrentWeather(lat, lon),
        cacheTimer: getCacheTimer(time)
      };
    }

    if (apiName === 'rapidWeather') {
      cache[key] = {
        ...await apiRapid.fetchWeather(lat, lon),
        cacheTimer: getCacheTimer(time)
      };
    }
  }
  return cache[key];
};

export const fetchForecastWeatherWithCache = async (cityId: number, time: number) => {
  const now = new Date().getTime();

  if (!cache[cityId] || cache[cityId].cacheTimer < now) {
    cache[cityId] = {
      ...await apiOpenWeather.fetchForecastWeather(cityId),
      cacheTimer: getCacheTimer(time)
    };
  }
  return cache[cityId];
};
