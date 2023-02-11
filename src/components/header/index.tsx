import React, { ChangeEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Control, HeaderContainer, Input, Logo, ThemeButton } from './styles';

import LogoApp from '@/assets/icons/logo.svg';
import ThemeLogo from '@/assets/icons/theme_logo.svg';
import { RadioGroup } from '@/components/radioGroup';
import { changeTheme, setWeatherDataBasic, setWeatherDataCity } from '@/store/actions';
import { selectAppTheme } from '@/store/selectors';

export const Header = () => {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectAppTheme);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (value) dispatch(setWeatherDataCity(value));
    else dispatch(setWeatherDataBasic());
  };

  const onChangeTheme = () => {
    dispatch(changeTheme(currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <HeaderContainer>
      <Logo src={LogoApp} alt='Logo' />
      <Control>
        <RadioGroup />
        <ThemeButton src={ThemeLogo} onClick={onChangeTheme} />
        <Input placeholder='Выбрать город' onChange={onSearch} />
      </Control>
    </HeaderContainer>
  );
};
