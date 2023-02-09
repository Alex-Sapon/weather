import MainlyCloudy from '@/assets/icons/mainly_cloudy.svg';
import Rain from '@/assets/icons/rain.svg';
import Snow from '@/assets/icons/snow.svg';
import Sun from '@/assets/icons/sun.svg';
// import Moon from '@/assets/icons/moon.svg';
// import SmallRainSun from '@/assets/icons/small_rain_sun.svg';
// import SmallRain from '@/assets/icons/small_rain.svg';

export const getIcon = (name: string) => {
  switch (name) {
  case 'Clouds': return MainlyCloudy;
  case 'Rain': return Rain;
  case 'Sun': return Sun;
  case 'Clear': return Sun;
  case 'Snow': return Snow;
  // case 'Clouds': return MainlyCloudy;
  default: return name;
  }
};
