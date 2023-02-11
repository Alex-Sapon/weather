import styled from 'styled-components';

export const LeftSideInfoContainer = styled.div`
  height: 300px;
  padding: 30px;
  border-radius: 20px;
  color: ${props => props.theme.color.textSecondary};
  background-color: ${props => props.theme.color.backgroundSecondary};
  box-shadow: ${props => props.theme.boxShadow};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 10px;

  @media (max-width: 479.98px) {
    padding: 20px;
    height: 250px;
  }
`;

export const LeftSideTemperature = styled.div`
  font-weight: 500;
  font-size: 96px;
  color: ${props => props.theme.color.textTertiary};
  grid-area: 1 / 1 / 2 / 2;

  @media (max-width: 479.98px) {
    font-size: 78px;
  }
`;

export const LeftSideDay = styled.div`
  color: ${props => props.theme.color.textPrimary};
  font-weight: 500;
  font-size: 32px;
  grid-area: 2 / 1 / 3 / 2;

  @media (max-width: 479.98px) {
    font-size: 26px;
  }
`;

export const LeftSideImage = styled.img`
  height: 85%;
  object-fit: contain;
  align-self: flex-start;
  justify-self: right;
  grid-area: 1 / 2 / 3 / 3;
`;

export const LeftSideTime = styled.div`
  font-weight: 400;
  font-size: 22px;
  grid-area: 3 / 1 / 4 / 3;

  @media (max-width: 479.98px) {
    font-size: 18px;
  }
`;

export const LeftSideCity = styled.div`
  font-weight: 400;
  font-size: 22px;
  grid-area: 4 / 1 / 5 / 3;

  @media (max-width: 479.98px) {
    font-size: 18px;
  }
`;
