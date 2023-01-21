import styled from 'styled-components';

export const RightSideInfoContainer = styled.div`
  width: 750px;
  height: 300px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightSideRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const RightSideLogo = styled.img`
  width: 45px;
  height: 45px;
  background: #fff;
  margin-right: 20px;
  padding: 7px;
  border-radius: 100%;
  box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
`;

export const RightSideTitle = styled.span`
  color: #939CB0;
  display: inline-block;
  width: 100px;
  margin-right: 35px;
`;

export const RightSideDescription= styled.div`
  color: #000;
  display: flex;
  align-items: center;
`;
