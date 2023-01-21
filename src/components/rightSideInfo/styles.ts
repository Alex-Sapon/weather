import styled from 'styled-components';

export const RightSideInfoContainer = styled.div`
  height: 300px;
  padding: 30px;
  border-radius: 20px;
  background-color: ${props => props.theme.color.backgroundSecondary};
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 479.98px) {
    padding: 20px;
  }
`;

export const RightSideRow = styled.div`
  display: grid;
  grid-template-columns: 50px 120px 1fr;
  gap: 10px;
  align-items: center;
  font-size: 16px;
`;

export const RightSideLogo = styled.img`
  height: 45px;
  background: #fff;
  padding: 7px;
  border-radius: 100%;
  box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
`;

export const RightSideTitle = styled.span`
  color: ${props => props.theme.color.textSecondary};
  display: inline-block;
`;

export const RightSideDescription= styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.textPrimary};
`;
