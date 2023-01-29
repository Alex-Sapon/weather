import React, { useEffect } from 'react';

import ReactDOM from 'react-dom';

import { AlertBarContainer, AlertBarContent, AlertBarSubtitle, AlertBarTitle } from './styles';

import { Button } from '@/components/button';

type AlertBarProps = {
  error: string | null
  onClose: () => void
  seconds: number
}

export const AlertBar = ({ error, onClose, seconds }: AlertBarProps) => {
  useEffect(() => {
    if (error) {
      const idTimeout = setTimeout(() => onClose(), seconds ?? 5000);
      return () => clearTimeout(idTimeout);
    }
  }, [error]);

  if (!error) return null;

  return ReactDOM.createPortal(
    <AlertBarContainer>
      <Button handleClick={onClose} text='✕' />
      <AlertBarContent>
        <AlertBarTitle>Oops!</AlertBarTitle>
        <AlertBarSubtitle>{error}</AlertBarSubtitle>
      </AlertBarContent>
    </AlertBarContainer>,
    document.body,
  );
};
