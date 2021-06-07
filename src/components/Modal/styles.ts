import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: var(--overlay);
`;

export const Container = styled.div`
  height: 600px;
  width: 400px;
  border-radius: 10px;
  background-color: var(--zero);
  position: relative;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: var(--always-on-top);

  > button {
    width: max-content;
    border: none;
    background: transparent;
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
    filter: brightness(0.8);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--negative);

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 0;

    svg {
      font-size: 2rem;
    }
  }
`;
