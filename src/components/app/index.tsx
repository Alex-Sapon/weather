import React from 'react';

import { GlobalStyles } from '@/styles/global';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { Cards } from '@/components/cards';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { AppContainer } from './styles';

export const App = () => (
  <ThemeProvider theme={theme.light}>
    <AppContainer>
      <Header />
      <Info />
      <Cards />
      <GlobalStyles />
    </AppContainer>
  </ThemeProvider>
);
