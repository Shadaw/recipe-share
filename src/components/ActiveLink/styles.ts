import styled, { css } from 'styled-components';

type ItemProps = {
  active: boolean;
};

export const Item = styled.a<ItemProps>`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: var(--negative);
  font-weight: bold;
  font-size: 1rem;

  & + a {
    margin-left: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    border-radius: 5px;
    height: 3px;
    bottom: -5px;
    left: 0;
    background: var(--primary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  ${({ active }) =>
    active &&
    css`
      &:after {
        transform: scaleX(1);
      }
    `}

  ${({ active }) =>
    !active &&
    css`
      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    `}
`;
