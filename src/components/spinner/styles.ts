import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -8px;
  background-color: ${props => props.theme === 'light' ? '#d3e6ed61' : '#1A1A1C'};
`;

export const SpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

export const SpinnerElement = styled.div`
  transform-origin: 40px 40px;
  animation: spinner 1.2s linear infinite;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background-color: ${props => props.theme === 'light' ? '#2E3035' : '#fff'};
  }

  &:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }

  &:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }

  &:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }

  &:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }

  &:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }

  &:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }

  &:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }

  &:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }

  &:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }

  &:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  &:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }

  &:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }

  @keyframes spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
