import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { RadioInput, Form, Span } from './styles';

import { setStormGlassDataBasic } from '@/store/actions';

export const RadioGroup = () => {
  const [apiName, setApiName] = useState('openWeather');
  
  const dispatch = useDispatch();

  const onChangeApi = () => {
    setApiName(apiName === 'openWeather' ? 'stormGlass' : 'openWeather');
  };

  useEffect(() => {
    if (apiName === 'stormGlass') dispatch(setStormGlassDataBasic());
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
