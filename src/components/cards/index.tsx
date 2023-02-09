import React, { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { v1 } from 'uuid';

import { CardsContainer, CardsItems, CardsTitle, SlideLeft, SlideRight } from './styles';

import { Card } from '@/components/card';
import { selectForecastList } from '@/store/selectors';

export const Cards = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const list = useSelector(selectForecastList);

  const slideLeft = () => {
    if (ref.current) ref.current.scrollLeft -= 500;
  };

  const slideRight = () => {
    if (ref.current) ref.current.scrollLeft += 500;
  };

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const onWheel = (event: WheelEvent) => {
        event.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + event.deltaY * 4,
          behavior: 'smooth',
        });
      };

      element.addEventListener('wheel', onWheel);

      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <CardsContainer>
      <CardsTitle>Погода на 4 дня</CardsTitle>
      <SlideLeft onClick={slideLeft}/>
      <CardsItems ref={ref}>
        {list.map(({ description, date, temp, icon }) =>
          <Card
            key={v1()}
            description={description}
            date={date}
            icon={icon}
            temp={temp}
          />,
        )}
      </CardsItems>
      <SlideRight onClick={slideRight} />
    </CardsContainer>
  );
};
