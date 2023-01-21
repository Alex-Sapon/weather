import styled from 'styled-components';

export const CardContainer = styled.div`
  min-height: 200px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(6, auto-fill);
  row-gap: 5px;
  color: ${props => props.theme.color.textPrimary};
  background-color: ${props => props.theme.color.backgroundTertiary};
  border-radius: 10px;
`;

export const CardTextBold = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const CardTextLight = styled.div`
  font-size: 14px;
  color: ${props => props.theme.color.textSecondary};
`;

export const CardImage = styled.img`
  margin: 8px 0;
`;
