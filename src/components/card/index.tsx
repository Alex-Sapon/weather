import React from 'react';

import { CardContainer, CardTextBold, CardImage, CardTextLight } from './styles';

import { getIcon } from '@/helpers';
import { DayOfForecast } from '@/types';

type CardProps = {
  props: DayOfForecast
}

export const Card = ({ props }: CardProps) => (
  <CardContainer>
    <CardTextBold>
      {new Date(props!.dt_txt).toLocaleString().slice(0, 10)}
    </CardTextBold>
    <CardTextLight>
      {new Date(props!.dt_txt).toLocaleString().slice(11, -3)}
    </CardTextLight>
    <CardImage src={getIcon(props!.weather[0]!.main)}/>
    <CardTextBold>
      {Math.round(props!.main.temp_max!)}&deg;
    </CardTextBold>
    <CardTextLight>
      {props!.weather[0].description}
    </CardTextLight>
  </CardContainer>
);
