import React from 'react';

import { ButtonStyled } from './styles';

type ButtonProps = {
  text: string
  handleClick: () => void
}

export const Button = ({text, handleClick}: ButtonProps) => (
  <ButtonStyled onClick={handleClick}>
    {text}
  </ButtonStyled>
);
