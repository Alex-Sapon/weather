import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 767.98px) {
    margin-bottom: 30px;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 65px;
  height: 65px;
  margin-right: 15px;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  align-items: center;

  @media (max-width: 767.98px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 479.98px) {
   flex-wrap: wrap;
    row-gap: 20px;
  }
`;

export const ThemeButton = styled.img`
  cursor: pointer;
  margin: 0 30px;

  @media (max-width: 767.98px) {
    flex: 0 1 auto;
  }
  
  @media (max-width: 479.98px) {
    margin: 0;
  }
`;

export const Input = styled.input`
  color: ${props => props.theme.color.textPrimary};
  background-color: ${props => props.theme.color.backgroundTertiary};
  border-radius: 10px;
  border: none;
  width: 195px;
  height: fit-content;
  padding: 10px 15px;
  font-size: 16px;
  justify-self: flex-end;
  
  &:focus {
    outline: none;
  }

  @media (max-width: 767.98px) {
    flex: 0 1 100%;
  }

  @media (max-width: 479.98px) {
    width: 100%;
    justify-self: flex-start;
  }
`;
