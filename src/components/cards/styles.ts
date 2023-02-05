import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styled from 'styled-components';

export const CardsContainer = styled.div`
  position: relative;
`;

export const CardsTitle = styled.h2`
  color: ${props => props.theme.color.textPrimary};
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const CardsItems = styled.div`
  padding: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 20px;
  display: flex;
  border-radius: 20px;
  scroll-behavior: smooth;
  background-color: ${props => props.theme.color.backgroundSecondary};
  box-shadow: ${props => props.theme.boxShadow};

  &::-webkit-scrollbar {
    display: none;
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
    color: #000;
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
    color: #000;
    background-color: rgba(255, 255, 255, 0.6)
  }

  @media (max-width: 479.98px) {
    display: none;
  }
}
`;
