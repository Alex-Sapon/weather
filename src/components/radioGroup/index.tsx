import React, { ChangeEvent, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { RadioInput, Container, Span } from './styles';

import { setRapidDataBasic, setWeatherDataBasic } from '@/store/actions';

export const RadioGroup = () => {
  const [apiName, setApiName] = useState('openWeather');
  
  const dispatch = useDispatch();

  const onChangeApi = (event: ChangeEvent) => setApiName(event.target.id);

  useEffect(() => {
    if (apiName === 'rapidWeather') dispatch(setRapidDataBasic());
    if (apiName === 'openWeather') dispatch(setWeatherDataBasic());
  }, [apiName]);
  
  return (
    <Container>
      <Span>
        <RadioInput 
          onChange={onChangeApi} 
          type="radio" 
          id="openWeather"
          checked={apiName === 'openWeather'}
        />
        <label htmlFor="openWeather">openWeather</label>
      </Span>
      <Span>
        <RadioInput
          onChange={onChangeApi} 
          type="radio" 
          id="rapidWeather"
          checked={apiName === 'rapidWeather'}
        />
        <label htmlFor="rapidWeather">rapidWeather</label>
      </Span>
    </Container>
  );
};
