import React from 'react';

import { GlobalStyles } from '@/styles/global';
import { Header } from '@/components/header';
import { AppContainer } from '@/components/app/styles';
import { Info } from '@/components/info';

export const App = () => (
  <AppContainer>
    <Header />
    <Info />
    <GlobalStyles />
  </AppContainer>
);
