import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppContainer } from './styles';

import { Cards } from '@/components/cards';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { useAppSelector } from '@/hooks';
import { setCoordinates } from '@/store/actions';
import { selectAppTheme } from '@/store/selectors';
import { GlobalStyles } from '@/styles/global';
import { theme } from '@/styles/theme';

export const App = () => {
  const currentTheme = useSelector(selectAppTheme);
  const isInitialized = useAppSelector(state => state.appReducer.isInitialized);

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(setCoordinates(
        position.coords.latitude, position.coords.longitude,
      ));
      dispatch({ type: 'LOAD_WEATHER_DATA' });
    });
  }, []);

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

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
