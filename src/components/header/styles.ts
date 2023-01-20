import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Logo = styled.img`
  width: 65px;
  height: 65px;
  margin-right: 40px;
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
  background-color: #4793FF33;
  color: #000;
  border-radius: 10px;
  border: none;
  width: 195px;
  padding: 10px 15px;
  font-size: 16px;
  
  &:focus {
    outline: none;
  }
`;
