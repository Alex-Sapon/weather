import React from 'react';

import { InfoContainer } from './styles';

import { LeftSideInfo } from '@/components/leftSideInfo';
import { RightSideInfo } from '@/components/rightSideInfo';

export const Info = () => (
  <InfoContainer>
    <LeftSideInfo />
    <RightSideInfo />
  </InfoContainer>
);
