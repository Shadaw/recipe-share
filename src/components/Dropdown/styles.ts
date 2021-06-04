import styled from 'styled-components';

export const Title = styled.div`
  cursor: pointer;
  color: var(--zero);
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 0.85rem;

  z-index: var(--always-on-top);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--zero);
  color: var(--negative);
  margin-top: 1.2rem;
  position: absolute;
  border-radius: 5px;
  padding: 20px;
  right: 0;

  &::before {
    content: '';
    position: absolute;
    border-right: 1.2rem solid transparent;
    border-left: 1.2rem solid transparent;
    border-bottom: 1.2rem solid var(--zero);
    top: -0.6rem;
    right: 1.25rem;
  }

  z-index: var(--always-on-top);
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: var(--overlay);
`;

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: max-content;
`;

export const DropdownItems = styled.div`
  display: flex;
  flex-direction: column;

  width: max-content;

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    padding: 0.5rem;
    border: 1px solid transparent;
    background: #fbfbfb;
    transition: border 0.2s, color 0.2s, background 0.2s;

    &:hover {
      color: var(--primary);
      border: 1px solid var(--primary);
    }

    & + div {
      margin-top: 0.5rem;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;
