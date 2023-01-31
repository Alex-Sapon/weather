import React from 'react';

import { CardContainer, CardTextBold, CardImage, CardTextLight } from './styles';

import { getIcon } from '@/helpers';
import { DayOfForecast } from '@/types';

type CardProps = {
  props: DayOfForecast
}

export const Card = ({ props }: CardProps) => (
  <CardContainer>
    <CardTextBold>{new Date(props!.dt).toDateString()}</CardTextBold>
    <CardTextLight>{new Date(props!.dt_txt).toDateString()}</CardTextLight>
    <CardImage src={getIcon(props!.weather[0]!.main)}/>
    <CardTextBold>
      {Math.round(props!.main.temp_max! - 273.15)}&deg;
    </CardTextBold>
    <CardTextLight>
      {Math.round(props!.main.temp_min - 273.15)}&deg;
    </CardTextLight>
    <CardTextLight>{props!.weather[0].description}</CardTextLight>
  </CardContainer>
);
