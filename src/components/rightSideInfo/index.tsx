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
import { useAppSelector } from '@/hooks';

export const RightSideInfo = () => {
  const temp = useAppSelector(state => state.openWeatherReducer.currentData.main.temp);
  const feelsLike = useAppSelector(state => state.openWeatherReducer.currentData.main.feels_like);
  const press = useAppSelector(state => state.openWeatherReducer.currentData.main.pressure);
  const speed = useAppSelector(state => state.openWeatherReducer.currentData.wind.speed);
  const desc = useAppSelector(state => state.openWeatherReducer.currentData.weather[0].description);

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
