import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppContainer } from './styles';

import { AlertBar } from '@/components/alertBar';
import { Cards } from '@/components/cards';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { Spinner } from '@/components/spinner';
import { setAppError } from '@/store/actions';
import { selectAppError, selectAppTheme, selectIsInitialized } from '@/store/selectors';
import { GlobalStyles, theme } from '@/styles';

export const App = () => {
  const currentTheme = useSelector(selectAppTheme);
  const isInitialized = useSelector(selectIsInitialized);
  const error = useSelector(selectAppError);

  const dispatch = useDispatch();

  const handleOnClose = () => dispatch(setAppError(''));

  if (!isInitialized) return <Spinner theme={currentTheme} />;

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
