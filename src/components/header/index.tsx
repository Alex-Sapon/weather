import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import LogoApp from '@/assets/icons/logo.svg';
import ThemeLogo from '@/assets/icons/theme_logo.svg';
import { Control, HeaderContainer, Input, Logo, ThemeButton } from '@/components/header/styles';
import { useAppSelector } from '@/hooks';
import { changeTheme } from '@/store/actions';

export const Header = () => {
  const [city, setCity] = useState('');

  const dispatch = useDispatch();

  const currentTheme = useAppSelector(state => state.appReducer.theme);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
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
          value={city}
          onChange={handleOnChange}
        />
      </Control>
    </HeaderContainer>
  );
};
