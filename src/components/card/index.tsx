import React from 'react';

import { CardContainer, CardImage, CardTextBold, CardTextLight } from './styles';

import { ForecastWeatherType } from '@/api/interfaces';
import { getIconUrl, convertUnixTimeToDate } from '@/utils';

export const Card = ({ temp, description, date, icon }: ForecastWeatherType) => (
  <CardContainer>
    <CardTextBold>
      {convertUnixTimeToDate(date).toLocaleDateString()}
    </CardTextBold>
    <CardTextLight>
      {convertUnixTimeToDate(date).toLocaleTimeString().slice(0, -3)}
    </CardTextLight>
    <CardImage src={getIconUrl(icon)}/>
    <CardTextBold>
      {Math.round(temp)}&deg;
    </CardTextBold>
    <CardTextLight>
      {description}
    </CardTextLight>
  </CardContainer>
);
