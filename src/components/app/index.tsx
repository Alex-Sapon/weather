import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppContainer } from './styles';

import { AlertBar } from '@/components/alertBar';
import { Cards } from '@/components/cards';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { Spinner } from '@/components/spinner';
import { useAppSelector } from '@/hooks';
import { loadWeatherDataBasic, setAppError } from '@/store/actions';
import { GlobalStyles, theme } from '@/styles';

export const App = () => {
  const currentTheme = useAppSelector(state => state.appReducer.theme);
  const isInitialized = useAppSelector(state => state.appReducer.isInitialized);
  const error = useAppSelector(state => state.appReducer.error);

  const dispatch = useDispatch();
  
  const handleOnClose = () => dispatch(setAppError(''));
  
  useEffect(() => {
    dispatch(loadWeatherDataBasic());
  }, []);

  if (!isInitialized) return <Spinner theme={currentTheme}/>;

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <AppContainer>
        <Header />
        <Info />
        <Cards />
      </AppContainer>
      <AlertBar error={error} onClose={handleOnClose} seconds={5000} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
