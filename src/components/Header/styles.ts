import styled, { css } from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  background: var(--gray);
  border-bottom: 1px solid var(--gray-200);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 5rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-left: 1.5rem;
    }

    margin-left: auto;
  }
`;

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
    `}
`;
