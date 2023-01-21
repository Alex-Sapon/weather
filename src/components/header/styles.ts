import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 767.98px) {
    margin-bottom: 30px;
  }
`;

export const Logo = styled.img`
  width: 65px;
  height: 65px;
  margin-right: 15px;
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeButton = styled.img`
  cursor: pointer;
  margin-right: 20px;
`;

export const Input = styled.input`
  color: ${props => props.theme.color.textPrimary};
  background-color: ${props => props.theme.color.backgroundTertiary};
  border-radius: 10px;
  border: none;
  width: 195px;
  padding: 10px 15px;
  font-size: 16px;
  
  &:focus {
    outline: none;
  }
`;
