import styled, { css } from 'styled-components';

interface NavItemProps {
  active?: boolean;
}

export const NavItem = styled.a<NavItemProps>`
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 5rem;
  line-height: 5rem;
  color: var(--negative);

  transition: color 0.2s;

  & + a {
    margin-left: 2rem;
  }

  &:hover {
    color: var(--negative);
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--negative);
      font-weight: bold;

      &::after {
        content: '';
        height: 3px;
        width: 100%;
        position: absolute;
        bottom: 20px;
        left: 0;
        background: var(--primary);
      }
    `}
`;
