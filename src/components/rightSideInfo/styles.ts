import styled from 'styled-components';

export const RightSideInfoContainer = styled.div`
  height: 300px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
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
  color: #939CB0;
  display: inline-block;
`;

export const RightSideDescription= styled.div`
  color: #000;
  display: flex;
  align-items: center;
`;
