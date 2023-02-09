import React, { ChangeEvent, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { RadioInput, Form, Span } from './styles';

import { setStormGlassDataBasic, setWeatherDataBasic } from '@/store/actions';

export const RadioGroup = () => {
  const [apiName, setApiName] = useState('openWeather');
  
  const dispatch = useDispatch();

  const onChangeApi = (event: ChangeEvent) => setApiName(event.target.id);

  useEffect(() => {
    if (apiName === 'stormGlass') dispatch(setStormGlassDataBasic());
    if (apiName === 'openWeather') dispatch(setWeatherDataBasic());
  }, [apiName]);
  
  return (
    <Form action="#">
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
          id="stormGlass"
          checked={apiName === 'stormGlass'}
        />
        <label htmlFor="stormGlass">stormGlass</label>
      </Span>
    </Form>
  );
};
