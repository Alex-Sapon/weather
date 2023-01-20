import React from 'react';

import LogoApp from '@/assets/icons/logo.svg';
import ThemeLogo from '@/assets/icons/theme_logo.svg';
import { HeaderContainer, Logo, Control, ThemeButton, Input } from '@/components/header/styles';

export const Header = () => (
  <HeaderContainer>
    <Logo src={LogoApp} alt='Logo' />
    <Control>
      <ThemeButton src={ThemeLogo} />
      <Input placeholder='Выбрать город'/>
    </Control>
  </HeaderContainer>
);
