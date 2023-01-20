import React from 'react';

import Sun from '@/assets/icons/sun.svg';
import {
  LeftSideInfoContainer,
  LeftSideWeather,
  LeftSideTemperature,
  LeftSideDay,
  LeftSideTime,
  LeftSideCity,
} from './styles';

export const LeftSideInfo = () => (
  <LeftSideInfoContainer>
    <LeftSideTemperature>20°</LeftSideTemperature>
    <LeftSideDay>Сегодня</LeftSideDay>
    <LeftSideWeather src={Sun}/>
    <LeftSideTime>Время: 21:54</LeftSideTime>
    <LeftSideCity>Город: Санкт-Петербург</LeftSideCity>
  </ LeftSideInfoContainer>
);
