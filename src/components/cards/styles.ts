import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styled from 'styled-components';


export const CardsControl = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const CardsContainer = styled.div`
  position: relative;
`;

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
  position: relative;
  padding: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 20px;
  display: flex;
  border-radius: 20px;
  background-color: ${props => props.theme.color.backgroundSecondary};
  box-shadow: ${props => props.theme.boxShadow};

  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const SlideLeft = styled(MdChevronLeft)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  z-index: 100;
  transition: all .3s ease;
  color: ${props => props.theme.color.textPrimary};

  &:hover {
    color: ${props => props.theme.color.textPrimary};
    background-color: rgba(255, 255, 255, 0.6)
  }

  @media (max-width: 479.98px) {
    display: none;
  }
`;

export const SlideRight = styled(MdChevronRight)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  z-index: 100;
  transition: all .3s ease;
  color: ${props => props.theme.color.textPrimary};

  &:hover {
    color: ${props => props.theme.color.textPrimary};
    background-color: rgba(255, 255, 255, 0.6)
  };

  @media (max-width: 479.98px) {
    display: none;
  }
}
`;
