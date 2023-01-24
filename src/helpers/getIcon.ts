import MainlyCloudy from '@/assets/icons/mainly_cloudy.svg';
import Rain from '@/assets/icons/rain.svg';
import Sun from '@/assets/icons/sun.svg';
// import SmallRainSun from '@/assets/icons/small_rain_sun.svg';
// import SmallRain from '@/assets/icons/small_rain.svg';

export const getIcon = (name: string) => {
  switch (name) {
  case 'Clouds': return MainlyCloudy;
  case 'Rain': return Rain;
  case 'Sun': return Sun;
  // case 'Snow': return MainlyCloudy;
  // case 'Clouds': return MainlyCloudy;
  default: return null;
  }
};
