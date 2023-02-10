import React from 'react';

import { CardContainer, CardImage, CardTextBold, CardTextLight } from './styles';

import { getIconUrl } from '@/helpers/getIconUrl';
import { ForecastWeatherType } from '@/types';

export const Card = ({ temp, description, date, icon }: ForecastWeatherType) => (
  <CardContainer>
    <CardTextBold>
      {new Date(date).toLocaleString().slice(0, 10)}
    </CardTextBold>
    <CardTextLight>
      {new Date(date).toLocaleString().slice(11, -3)}
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
