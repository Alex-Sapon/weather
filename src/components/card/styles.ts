import styled from 'styled-components';

export const CardContainer = styled.div`
  min-height: 200px;
  min-width: 140px;
  padding: 10px;
  display: grid;
  grid-template-rows: 20px 20px 65px 20px minmax(20px, auto);
  align-items: center;
  row-gap: 5px;
  color: ${props => props.theme.color.textPrimary};
  background-color: ${props => props.theme.color.backgroundTertiary};
  border-radius: 10px;
  user-select: none;
`;

export const CardTextBold = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const CardTextLight = styled.div`
  font-size: 14px;
  color: ${props => props.theme.color.textSecondary};
`;

export const CardImage = styled.img``;
