import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 9rem);
  margin-bottom: 4rem;

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
    }

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
    }

    input:not([type='file']),
    textarea,
    select {
      width: 100%;
      border: 1px solid var(--gray-200);
      padding: 10px;
      border-radius: 5px;
      outline: none;

      &:focus {
        border-color: var(--gray-300);
      }
    }

    textarea {
      resize: none;
    }
  }
`;

export const Footer = styled.div`
  position: fixed;
  width: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  background: var(--gray);
  border-top: 1px solid var(--gray-200);

  button {
    padding: 10px 3rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: var(--zero);
    background-color: var(--primary);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
