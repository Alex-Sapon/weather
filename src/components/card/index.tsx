import React from 'react';
import { CardContainer, CardTextBold, CardImage, CardTextLight } from './styles';

type CardProps = {
  day: string
  date: string
  image: string
  tempAM: string
  tempPM: string
  desc: string
}

export const Card = ({ day, date, tempAM, tempPM, image, desc }: CardProps) => (
  <CardContainer>
    <CardTextBold>{day}</CardTextBold>
    <CardTextLight>{date}</CardTextLight>
    <CardImage src={image}/>
    <CardTextBold>{tempAM}</CardTextBold>
    <CardTextLight>{tempPM}</CardTextLight>
    <CardTextLight>{desc}</CardTextLight>
  </CardContainer>
);
