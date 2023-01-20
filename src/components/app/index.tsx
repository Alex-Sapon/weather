import React from 'react';

import { GlobalStyles } from '@/styles/global';
import { Header } from '@/components/header';
import { AppContainer } from '@/components/app/styles';

export const App = () => (
  <AppContainer>
    <Header/>
    <GlobalStyles/>
  </AppContainer>
);
