import { setWeatherData } from '@/store/actions';
import { CurrentWeather, ForecastWeather } from '@/types';

export const convertAndSetOpenWeatherData = (weather: CurrentWeather, forecast: ForecastWeather) => setWeatherData({
  date: weather.dt,
  city: weather.name,
  description: weather.weather[0].description,
  feelsLike: weather.main.feels_like,
  icon: weather.weather[0].icon,
  temp: weather.main.temp,
  wind: Math.round(weather.wind.speed),
  pressure: weather.main.pressure,
},
forecast.list.map(data => ({
  date: data.dt,
  temp: data.main.temp,
  icon: data.weather[0].icon,
  description: data.weather[0].description,
})),
);
