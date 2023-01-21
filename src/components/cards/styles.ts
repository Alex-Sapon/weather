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
  gap: 20px;
  margin-right: 20px;

  @media (max-width: 767.98px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 479.98px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const CardsItems = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 30px;
  border-radius: 20px;
  background-color: ${props => props.theme.color.backgroundSecondary};
  box-shadow: ${props => props.theme.boxShadow};
`;
