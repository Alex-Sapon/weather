import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppContainer } from './styles';

import { Cards } from '@/components/cards';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { Spinner } from '@/components/spinner';
import { useAppSelector } from '@/hooks';
import { GlobalStyles, theme } from '@/styles';

export const App = () => {
  const currentTheme = useAppSelector(state => state.appReducer.theme);
  const isInitialized = useAppSelector(state => state.appReducer.isInitialized);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'LOAD_WEATHER_DATA_BASIC' });
  }, []);

  if (!isInitialized) return <Spinner theme={currentTheme}/>;

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
