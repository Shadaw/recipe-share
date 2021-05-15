import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
`;

export const Container = styled.div`
  height: 800px;
  width: 600px;
  border-radius: 10px;
  background-color: var(--zero);
  position: relative;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--negative);

  button {
    position: absolute;
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
