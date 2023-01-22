import React from 'react';

import {
  LeftSideInfoContainer,
  LeftSideWeather,
  LeftSideTemperature,
  LeftSideDay,
  LeftSideTime,
  LeftSideCity,
} from './styles';

import Sun from '@/assets/icons/sun.svg';

export const LeftSideInfo = () => (
  <LeftSideInfoContainer>
    <LeftSideTemperature>20&deg;</LeftSideTemperature>
    <LeftSideDay>Сегодня</LeftSideDay>
    <LeftSideWeather src={Sun}/>
    <LeftSideTime>Время: 21:54</LeftSideTime>
    <LeftSideCity>Город: Санкт-Петербург</LeftSideCity>
  </ LeftSideInfoContainer>
);
