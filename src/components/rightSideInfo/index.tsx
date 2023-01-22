import React from 'react';

import {
  RightSideInfoContainer,
  RightSideTitle,
  RightSideLogo,
  RightSideRow,
  RightSideDescription
} from './styles';

import Precipitation from '@/assets/icons/precipitation.svg';
import Press from '@/assets/icons/pressure.svg';
import Temp from '@/assets/icons/temp.svg';
import Wind from '@/assets/icons/wind.svg';


export const RightSideInfo = () => (
  <RightSideInfoContainer>
    <RightSideRow>
      <RightSideLogo src={Temp} />
      <RightSideTitle>Температура</RightSideTitle>
      <RightSideDescription>20&deg; - ощущается как 17&deg;</RightSideDescription>
    </RightSideRow>

    <RightSideRow>
      <RightSideLogo src={Press} />
      <RightSideTitle>Давление</RightSideTitle>
      <RightSideDescription>765 мм ртутного столба - нормальное</RightSideDescription>
    </RightSideRow>

    <RightSideRow>
      <RightSideLogo src={Precipitation} />
      <RightSideTitle>Осадки</RightSideTitle>
      <RightSideDescription>Без осадков</RightSideDescription>
    </RightSideRow>

    <RightSideRow>
      <RightSideLogo src={Wind} />
      <RightSideTitle>Ветер</RightSideTitle>
      <RightSideDescription>3 м/с юго-запад - легкий ветер</RightSideDescription>
    </RightSideRow>
  </RightSideInfoContainer>
);
