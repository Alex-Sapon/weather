import { RapidWeather } from '@/api/interfaces';
import { setWeatherData } from '@/store/actions';

export const convertAndSetRapidWeatherData = (weather: RapidWeather) => setWeatherData({
  date: weather.location.localtime_epoch,
  city: weather.location.name,
  description: weather.current.condition.text,
  feelsLike: weather.current.feelslike_c,
  icon: weather.current.condition.icon,
  temp: weather.current.temp_c,
  wind: Math.round(weather.current.wind_kph / 3.6),
  pressure: weather.current.pressure_mb,
},
weather.forecast.forecastday.map(data => ({
  date: data.date_epoch,
  temp: data.day.avgtemp_c,
  icon: data.day.condition.icon,
  description: data.day.condition.text,
}))
);
