import styled from 'styled-components';

export const CardContainer = styled.div`
  min-height: 200px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(6, auto-fill);
  row-gap: 5px;
  background-color: rgba(71, 147, 255, 0.2);
  border-radius: 10px;
`;

export const CardTextBold = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000;
`;

export const CardTextLight = styled.div`
  font-size: 14px;
  color: #939CB0;
`;

export const CardImage = styled.img`
  
`;
