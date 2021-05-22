import styled from 'styled-components';

export const Container = styled.button`
  height: 3rem;
  border-radius: 3rem;
  background: var(--primary);
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--zero);
  font-weight: bold;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  div {
    display: flex;
    align-items: center;
    background-color: var(--zero);
    border-radius: 20px;
    padding: 5px;
    height: 20px;
    width: 20px;
    margin-right: 1rem;
  }

  svg {
    color: var(--primary);
  }
`;
