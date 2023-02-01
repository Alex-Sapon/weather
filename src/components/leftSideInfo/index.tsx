import React from 'react';

import {
  LeftSideInfoContainer,
  LeftSideWeather,
  LeftSideTemperature,
  LeftSideDay,
  LeftSideTime,
  LeftSideCity,
} from './styles';

import { getIcon } from '@/helpers';
import { useAppSelector } from '@/hooks';

export const LeftSideInfo = () => {
  const temp = useAppSelector(state => state.openWeatherReducer.currentData.main.temp);
  const city = useAppSelector(state => state.openWeatherReducer.currentData.name);
  const icon = useAppSelector(state => state.openWeatherReducer.currentData.weather[0].main);

  return (
    <LeftSideInfoContainer>
      <LeftSideTemperature>
        {Math.round(temp)}&deg;
      </LeftSideTemperature>
      <LeftSideDay>Сегодня</LeftSideDay>
      <LeftSideWeather src={getIcon(icon)}/>
      <LeftSideTime>
        Дата: {new Date().toLocaleDateString()}
      </LeftSideTime>
      <LeftSideCity>Город: {city}</LeftSideCity>
    </ LeftSideInfoContainer>
  );
};
