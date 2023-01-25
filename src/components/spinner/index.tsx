import React from 'react';

import { SpinnerContainer, SpinnerWrapper, SpinnerElement } from './styles';

import { spinnerItems } from '@/constants/spinnerItems';

type SpinnerProps = {
  theme: string
}

export const Spinner = ({ theme }: SpinnerProps) => (
  <SpinnerContainer theme={theme}>
    <SpinnerWrapper>
      {spinnerItems.map(item =>
        <SpinnerElement key={item} theme={theme} />
      )}
    </SpinnerWrapper>
  </SpinnerContainer>
);
