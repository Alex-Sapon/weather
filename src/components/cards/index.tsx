import React from 'react';

import { CardsContainer, CardsControlLeft, CardsControl, CardsItems } from './styles';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { useAppSelector } from '@/hooks';

export const Cards = () => {
  const list = useAppSelector(state => state.openWeatherReducer.forecastData.list);
  
  return (
    <CardsContainer>
      <CardsControl>
        <CardsControlLeft>
          <Button text='На 4 дня' handleClick={() => {}} />
        </CardsControlLeft>
        <Button text='Отменить' handleClick={() => {}} />
      </CardsControl>
      <CardsItems>
        {list.map(data =>
          <Card key={data.dt} props={data} />
        )}
      </CardsItems>
    </CardsContainer>
  );
};
