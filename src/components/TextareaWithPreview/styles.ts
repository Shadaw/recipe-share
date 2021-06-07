import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    width: 100%;
  }

  button {
    margin-top: 0rem;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--primary);
    color: var(--zero);
    margin-top: -1rem;

    svg {
      font-size: 1.2rem;
    }
  }
`;

export const Preview = styled.div`
  width: 100%;
  border: 1px solid var(--gray-200);
  padding: 10px;
  border-radius: 5px;
  min-height: 212px;
  background-color: var(--zero);

  margin-top: calc(-2rem + 5px);
  margin-bottom: 2rem;
`;
