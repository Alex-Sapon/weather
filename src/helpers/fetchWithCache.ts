import { apiOpenWeather } from '@/api';
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

export const fetchWeatherCurrentWithCache = async (lat: number, lon: number, time: number) => {
  const now = new Date().getTime();

  const key = `${lat}_${lon}`;

  if (!cache[key] || cache[key].cacheTimer < now) {
    cache[key] = {
      ...await apiOpenWeather.fetchWeatherCurrent(lat, lon),
      cacheTimer: getCacheTimer(time)
    };
  }
  return cache[key];
};

export const fetchWeatherForecastWithCache = async (cityId: number, time: number) => {
  const now = new Date().getTime();

  if (!cache[cityId] || cache[cityId].cacheTimer < now) {
    cache[cityId] = {
      ...await apiOpenWeather.fetchWeatherForecast(cityId),
      cacheTimer: getCacheTimer(time)
    };
  }
  return cache[cityId];
};