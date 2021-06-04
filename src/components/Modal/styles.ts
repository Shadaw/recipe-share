import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
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

export const Content = styled.form`
  height: calc(100% - 29px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 2rem;
    width: 100px;
    height: 100px;
  }

  label {
    width: 100%;
    line-height: 2rem;

    & + label {
      margin-top: 1rem;
    }
  }

  input {
    width: 100%;
    border: 1px solid var(--gray-200);
    padding: 10px;
    border-radius: 5px;
    outline: none;

    &:focus {
      border-color: var(--gray-300);
    }
  }

  button {
    width: 100%;
    margin-top: 1.5rem;
    padding: 10px;
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

export const ErrorBox = styled.div`
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--zero);
  text-align: center;
  font-weight: bold;
  margin-bottom: 2rem;
`;
