import React from 'react';

import { useSelector } from 'react-redux';

import {
  LeftSideInfoContainer,
  LeftSideWeather,
  LeftSideTemperature,
  LeftSideDay,
  LeftSideTime,
  LeftSideCity,
} from './styles';

import { getIcon } from '@/helpers';
import { selectCurrentIcon, selectCurrentCity, selectCurrentTemp } from '@/store/selectors';

export const LeftSideInfo = () => {
  const temp = useSelector(selectCurrentTemp);
  const city = useSelector(selectCurrentCity);
  const icon = useSelector(selectCurrentIcon);

  return (
    <LeftSideInfoContainer>
      <LeftSideTemperature>{Math.round(temp)}&deg;</LeftSideTemperature>
      <LeftSideDay>Сегодня</LeftSideDay>
      <LeftSideWeather src={getIcon(icon)} />
      <LeftSideTime>Дата: {new Date().toLocaleDateString()}</LeftSideTime>
      <LeftSideCity>Город: {city}</LeftSideCity>
    </LeftSideInfoContainer>
  );
};
