import { apiOpenWeather, apiRapid, ipAPI } from '@/api';
import { cacheTimeMs } from '@/constants';
import { loadState, saveState } from '@/utils/localStorage';

type CacheType = {
  [key: string]: {
    cacheTimer: number
  }
}

const cache: CacheType = loadState() || {};
let cacheTimer = 0;

const getCacheTimer = (time: number) => {
  const now = new Date().getTime();

  if (cacheTimeMs < now + time) {
    cacheTimer = now + time;
  }

  return cacheTimer;
};

export const fetchCoordinatesWeatherWithCache = async (
  lat: number,
  lon: number,
  apiName: string,
  time: number,
) => {
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

  saveState(cache);

  return cache[key];
};

export const fetchCityWeatherWithCache = async (
  cityName: string,
  apiName: string,
  time: number,
  signal: AbortSignal,
) => {
  const now = new Date().getTime();

  const key = `${cityName}_${apiName}`;

  if (!cache[key] || cache[key].cacheTimer < now) {
    if (apiName === 'openWeather') {
      cache[key] = {
        ...await apiOpenWeather.fetchCityWeather(cityName, signal),
        cacheTimer: getCacheTimer(time)
      };
    }

    if (apiName === 'rapidWeather') {
      cache[key] = {
        ...await apiRapid.fetchWeatherWithCity(cityName, signal),
        cacheTimer: getCacheTimer(time)
      };
    }
  }

  saveState(cache);

  return cache[key];
};

export const fetchForecastWeatherWithCache = async (
  cityId: number,
  apiName: string,
  time: number,
  signal: AbortSignal
) => {
  const now = new Date().getTime();

  const key = `${cityId}_${apiName}`;

  if (!cache[key] || cache[key].cacheTimer < now) {
    cache[key] = {
      ...await apiOpenWeather.fetchForecastWeather(cityId, signal),
      cacheTimer: getCacheTimer(time)
    };
  }

  saveState(cache);

  return cache[key];
};

export const fetchUserLocationWithCache = async (time: number) => {
  const now = new Date().getTime();
  
  const key = 'userLocation';

  if (!cache[key] || cache[key].cacheTimer < now) {
    cache[key] = {
      ...await ipAPI.getUserLocation(),
      cacheTimer: getCacheTimer(time)
    };
  }

  saveState(cache);

  return cache[key];
};
