import React from 'react';

import { GlobalStyles } from '@/styles/global';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { Cards } from '@/components/cards';
import { AppContainer } from './styles';

export const App = () => (
  <AppContainer>
    <Header />
    <Info />
    <Cards />
    <GlobalStyles />
  </AppContainer>
);
