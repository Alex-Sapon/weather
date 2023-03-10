import React from 'react';

import { useSelector } from 'react-redux';

import {
  LeftSideInfoContainer,
  LeftSideImage,
  LeftSideTemperature,
  LeftSideDay,
  LeftSideTime,
  LeftSideCity,
} from './styles';

import { selectCurrentIcon, selectCurrentCity, selectCurrentTemp } from '@/store/selectors';
import { getIconUrl } from '@/utils';

export const LeftSideInfo = () => {
  const temp = useSelector(selectCurrentTemp);
  const city = useSelector(selectCurrentCity);
  const icon = useSelector(selectCurrentIcon);

  return (
    <LeftSideInfoContainer>
      <LeftSideTemperature>{Math.round(temp)}&deg;</LeftSideTemperature>
      <LeftSideDay>Сегодня</LeftSideDay>
      <LeftSideImage src={getIconUrl(icon)} />
      <LeftSideTime>Дата: {new Date().toLocaleDateString()}</LeftSideTime>
      <LeftSideCity>Город: {city}</LeftSideCity>
    </LeftSideInfoContainer>
  );
};
