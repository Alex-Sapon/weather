import React, { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';


import { CardsContainer, CardsControlLeft, CardsControl, CardsItems, SlideLeft, SlideRight } from './styles';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { selectForecastList } from '@/store/selectors';

export const Cards = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const list = useSelector(selectForecastList);

  const slideLeft = () => {
    const element = ref.current;
    if (element) element.scrollLeft -= 500;
  };

  const slideRight = () => {
    const element = ref.current;
    if (element) element.scrollLeft += 500;
  };

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const onWheel = (event: WheelEvent) => {
        event.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + event.deltaY * 4,
          behavior: 'smooth'
        });
      };

      element.addEventListener('wheel', onWheel);

      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <CardsContainer>
      <CardsControl>
        <CardsControlLeft>
          <Button text='На 4 дня' handleClick={() => {}} />
        </CardsControlLeft>
        <Button text='Отменить' handleClick={() => {}} />
      </CardsControl>
      <SlideLeft onClick={slideLeft} />
      <CardsItems ref={ref}>
        {list.map(data =>
          <Card key={data.dt} props={data} />
        )}
      </CardsItems>
      <SlideRight onClick={slideRight} />
    </CardsContainer>
  );
};
