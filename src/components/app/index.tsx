import React from 'react';

import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppContainer } from './styles';

import { Cards } from '@/components/cards';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { selectAppTheme } from '@/store/selectors';
import { GlobalStyles } from '@/styles/global';
import { theme } from '@/styles/theme';

export const App = () => {
  const currentTheme = useSelector(selectAppTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <AppContainer>
        <Header />
        <Info />
        <Cards />
        <GlobalStyles />
      </AppContainer>
    </ThemeProvider>
  );
};
