import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppContainer } from './styles';

import { Cards } from '@/components/cards';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { Spinner } from '@/components/spinner';
import { useAppSelector } from '@/hooks';
import { setCoordinates } from '@/store/actions';
import { GlobalStyles } from '@/styles/global';
import { theme } from '@/styles/theme';

export const App = () => {
  const currentTheme = useAppSelector(state => state.appReducer.theme);
  const isInitialized = useAppSelector(state => state.appReducer.isInitialized);

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(setCoordinates(
        position.coords.latitude,
        position.coords.longitude,
      ));
      dispatch({ type: 'LOAD_WEATHER_DATA' });
    });
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
