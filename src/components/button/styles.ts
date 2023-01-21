import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  background-color: #fff;
  border: solid 1px #B4B4B43F;
  font-size: 18px;
  color: #000;
  cursor: pointer;
  height: fit-content;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  transition: all .3s ease;

  &:active, &:hover {
    border: solid 1px transparent;
    background-color: #4793FF;
    color: #fff;
  }
`;
