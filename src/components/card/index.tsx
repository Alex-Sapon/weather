import React from 'react';

import { CardContainer, CardImage, CardTextBold, CardTextLight } from './styles';

import { getIcon } from '@/helpers';
import { ForecastWeatherType } from '@/types';

export const Card = ({ temp, description, date, iconName }: ForecastWeatherType) => (
  <CardContainer>
    <CardTextBold>
      {new Date(date).toLocaleString().slice(0, 10)}
    </CardTextBold>
    <CardTextLight>
      {new Date(date).toLocaleString().slice(11, -3)}
    </CardTextLight>
    <CardImage src={getIcon(iconName)}/>
    <CardTextBold>
      {Math.round(temp)}&deg;
    </CardTextBold>
    <CardTextLight>
      {description}
    </CardTextLight>
  </CardContainer>
);
