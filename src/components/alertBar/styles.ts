import styled from 'styled-components';

export const AlertBarContainer = styled.div`
  position: fixed; 
  overflow: hidden;
  display: grid;
  align-content: flex-start;
  align-items: center;
  column-gap: 15px;
  grid-template-columns: auto 1fr;
  z-index: 900;
  font-size: 20px;
  width: 40%;
  color: ${props => props.theme.color.textPrimary};
  background-color: ${props => props.theme.color.backgroundTertiary};
  left: 5%;
  bottom: 5%;
  padding: 15px 10px;
  -webkit-box-shadow: 0 3px 9px 2px rgba(34, 60, 80, .1);
`;

export const AlertBarContent = styled.div``;

export const AlertBarTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AlertBarSubtitle = styled.div``;
