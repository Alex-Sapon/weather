import React from 'react';

import { LeftSideInfo } from '@/components/leftSideInfo';
import { RightSideInfo } from '@/components/rightSideInfo';
import { InfoContainer } from './styles';

export const Info = () => (
  <InfoContainer>
    <LeftSideInfo />
    <RightSideInfo />
  </InfoContainer>
);
