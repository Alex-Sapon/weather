import styled from 'styled-components';

export const CardsControl = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const CardsContainer = styled.div``;

export const CardsControlLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 20px;
  margin-right: 30px;
`;

export const CardsItems = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(6, minmax(150px, 250px));
  gap: 30px;
  border-radius: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
`;
