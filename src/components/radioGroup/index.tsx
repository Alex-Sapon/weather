import React, { ChangeEvent, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container, RadioInput, Span } from './styles';

import { setApiName, toggleWeatherApi } from '@/store/actions';
import { selectApiName } from '@/store/selectors';

export const RadioGroup = () => {
  const dispatch = useDispatch();

  const apiName = useSelector(selectApiName);

  const onApiChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setApiName(event.target.id));
  };

  useEffect(() => {
    dispatch(toggleWeatherApi());
  }, [apiName]);
  
  return (
    <Container>
      <Span>
        <RadioInput
          onChange={onApiChange}
          type="radio" 
          id="openWeather"
          checked={apiName === 'openWeather'}
        />
        <label htmlFor="openWeather">openWeather</label>
      </Span>
      <Span>
        <RadioInput
          onChange={onApiChange}
          type="radio" 
          id="rapidWeather"
          checked={apiName === 'rapidWeather'}
        />
        <label htmlFor="rapidWeather">rapidWeather</label>
      </Span>
    </Container>
  );
};
