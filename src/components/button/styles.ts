import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  color: ${props => props.theme.color.textPrimary};
  background-color: ${props => props.theme.color.backgroundSecondary};
  border: solid 1px #B4B4B43F;
  font-size: 18px;
  cursor: pointer;
  height: fit-content;
  box-shadow: ${props => props.theme.boxShadow};
  transition: all .3s ease;

  &:active, &:hover {
    border: solid 1px transparent;
    background-color: ${props => props.theme.color.textTertiary};
    color: #fff;
  }
`;
