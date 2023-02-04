import React from 'react';

import { useSelector } from 'react-redux';

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
import {
  selectCurrentDesc,
  selectCurrentFeelsLike,
  selectCurrentPressure,
  selectCurrentSpeed,
  selectCurrentTemp,
} from '@/store/selectors';

export const RightSideInfo = () => {
  const temp = useSelector(selectCurrentTemp);
  const feelsLike = useSelector(selectCurrentFeelsLike);
  const press = useSelector(selectCurrentPressure);
  const speed = useSelector(selectCurrentSpeed);
  const desc = useSelector(selectCurrentDesc);

  return (
    <RightSideInfoContainer>
      <RightSideRow>
        <RightSideLogo src={Temp} />
        <RightSideTitle>Температура</RightSideTitle>
        <RightSideDescription>
          {Math.round(temp)}&deg; - ощущается как {Math.round(feelsLike)}&deg;
        </RightSideDescription>
      </RightSideRow>

      <RightSideRow>
        <RightSideLogo src={Press} />
        <RightSideTitle>Давление</RightSideTitle>
        <RightSideDescription>
          {Math.round(press / 1.333)} мм ртутного столба
        </RightSideDescription>
      </RightSideRow>

      <RightSideRow>
        <RightSideLogo src={Precipitation} />
        <RightSideTitle>Погода</RightSideTitle>
        <RightSideDescription>{desc}</RightSideDescription>
      </RightSideRow>

      <RightSideRow>
        <RightSideLogo src={Wind} />
        <RightSideTitle>Ветер</RightSideTitle>
        <RightSideDescription>{speed} м/с</RightSideDescription>
      </RightSideRow>
    </RightSideInfoContainer>
  );
};
