import React, { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import { Control, HeaderContainer, Input, Logo, ThemeButton } from './styles';

import LogoApp from '@/assets/icons/logo.svg';
import ThemeLogo from '@/assets/icons/theme_logo.svg';
import { useAppSelector } from '@/hooks';
import { changeTheme, loadWeatherDataBasic, loadWeatherDataCity } from '@/store/actions';

export const Header = () => {
  const dispatch = useDispatch();

  const currentTheme = useAppSelector(state => state.appReducer.theme);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (value) {
      dispatch(loadWeatherDataCity(value));
    } else dispatch(loadWeatherDataBasic());
  };
  
  const onChangeThemeClick = () => {
    dispatch(changeTheme(currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <HeaderContainer>
      <Logo src={LogoApp} alt='Logo' />
      <Control>
        <ThemeButton src={ThemeLogo} onClick={onChangeThemeClick}/>
        <Input
          placeholder='Выбрать город'
          onChange={onSearch}
        />
      </Control>
    </HeaderContainer>
  );
};
