import React from 'react';

import { RadioInput, Form, Span } from './styles';

export const RadioGroup = () => {
  const onChangeApi = () => {
    
  };
  
  return (
    <Form action="#">
      <Span>
        <RadioInput 
          onChange={onChangeApi} 
          type="radio" 
          id="openWeather"
          name="radio-group"
          checked 
        />
        <label htmlFor="openWeather">openWeather</label>
      </Span>
      <Span>
        <RadioInput
          onChange={onChangeApi} 
          type="radio" 
          id="stormGlass"
          name="radio-group" 
        />
        <label htmlFor="stormGlass">stormGlass</label>
      </Span>
    </Form>
  );
};
