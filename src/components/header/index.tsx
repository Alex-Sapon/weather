import React, { ChangeEvent, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Control, HeaderContainer, Input, Logo, ThemeButton } from './styles';

import LogoApp from '@/assets/icons/logo.svg';
import ThemeLogo from '@/assets/icons/theme_logo.svg';
import { RadioGroup } from '@/components/radioGroup';
import { changeTheme, setCityName, toggleWeatherApi } from '@/store/actions';
import { selectAppTheme, selectCityName } from '@/store/selectors';

export const Header = () => {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectAppTheme);
  const cityName = useSelector(selectCityName);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCityName(event.currentTarget.value.toLowerCase()));
  };

  const onChangeTheme = () => {
    dispatch(changeTheme(currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    dispatch(toggleWeatherApi());
  }, [cityName]);

  return (
    <HeaderContainer>
      <Logo src={LogoApp} alt='Logo' />
      <Control>
        <RadioGroup />
        <ThemeButton src={ThemeLogo} onClick={onChangeTheme} />
        <Input
          placeholder='Выбрать город'
          onChange={onSearch}
          value={cityName}
        />
      </Control>
    </HeaderContainer>
  );
};
