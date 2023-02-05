import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  column-gap: 20px;

  @media (max-width: 767.98px) {
    flex: 0 1 100%;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
  }

  @media (max-width: 479.98px) {
    flex: 0 1 240px;
    width: 240px;
  }
`;

export const RadioInput = styled.input`
  &:checked, &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  &:checked + label, &:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: ${props => props.theme.color.textPrimary};
  }

  &:checked + label:before, &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }

  &:checked + label:after, &:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #F87DA9;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Span = styled.span``;
