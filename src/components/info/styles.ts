import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: minmax(350px, 1fr) minmax(550px, 2fr);
  margin-bottom: 50px;

  @media (max-width: 991.98px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;
