import React from 'react';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import Sun from '@/assets/icons/sun.svg';
import { CardsContainer, CardsControlLeft, CardsControl, CardsItems } from './styles';

const cards: number[] = [1, 2, 3, 4, 5, 6];

export const Cards = () => {
  const onButtonClick = () => {};
  
  return (
    <CardsContainer>
      <CardsControl>
        <CardsControlLeft>
          <Button text='На неделю' handleClick={onButtonClick} />
          <Button text='На месяц' handleClick={onButtonClick} />
          <Button text='На 10 дней' handleClick={onButtonClick} />
        </CardsControlLeft>
        <Button text='Отменить' handleClick={onButtonClick} />
      </CardsControl>
      <CardsItems>
        {cards.map((i) =>
          <Card
            key={i}
            day="Сегодня"
            date="28 авг"
            image={Sun}
            tempAM='+18&deg;'
            tempPM='+18&deg;'
            desc='Облачно'
          />
        )}
      </CardsItems>
    </CardsContainer>
  );
};
