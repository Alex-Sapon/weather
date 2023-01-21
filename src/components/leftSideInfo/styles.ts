import styled from 'styled-components';

export const LeftSideInfoContainer = styled.div`
  height: 300px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
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
  color: #4793FF;
  grid-area: 1 / 1 / 2 / 2;

  @media (max-width: 479.98px) {
    font-size: 78px;
  }
`;

export const LeftSideDay = styled.div`
  font-weight: 500;
  font-size: 32px;
  grid-area: 2 / 1 / 3 / 2;

  @media (max-width: 479.98px) {
    font-size: 26px;
  }
`;

export const LeftSideWeather = styled.img`
  height: 70%;
  align-self: flex-start;
  justify-self: right;
  grid-area: 1 / 2 / 3 / 3;

  @media (max-width: 479.98px) {
    height: 60%;
  }
`;

export const LeftSideTime = styled.div`
  font-weight: 400;
  font-size: 22px;
  color: #939CB0;
  grid-area: 3 / 1 / 4 / 3;

  @media (max-width: 479.98px) {
    font-size: 18px;
  }
`;

export const LeftSideCity = styled.div`
  font-weight: 400;
  font-size: 22px;
  color: #939CB0;
  grid-area: 4 / 1 / 5 / 3;

  @media (max-width: 479.98px) {
    font-size: 18px;
  }
`;
