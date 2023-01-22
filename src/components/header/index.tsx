import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LogoApp from '@/assets/icons/logo.svg';
import ThemeLogo from '@/assets/icons/theme_logo.svg';
import { HeaderContainer, Logo, Control, ThemeButton, Input } from '@/components/header/styles';
import { changeTheme } from '@/store/actions';
import { selectAppTheme } from '@/store/selectors';

export const Header = () => {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectAppTheme);
  
  const onChangeThemeClick = () => {
    dispatch(changeTheme(currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <HeaderContainer>
      <Logo src={LogoApp} alt='Logo' />
      <Control>
        <ThemeButton src={ThemeLogo} onClick={onChangeThemeClick}/>
        <Input placeholder='Выбрать город'/>
      </Control>
    </HeaderContainer>
  );
};
