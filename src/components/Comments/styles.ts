import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid var(--gray-200);

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    textarea {
      margin-bottom: 1rem;
      resize: none;
      width: 100%;
      border: 1px solid var(--gray-200);
      padding: 10px;
      border-radius: 5px;
      outline: none;
    }

    button {
      align-self: flex-end;
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
  }

  h2 {
    margin-bottom: 1rem;
  }
`;

export const Comment = styled.div`
  background-color: var(--zero);
  border: 1px solid var(--gray-200);
  padding: 20px;
  border-radius: 5px;

  div:not(:first-child) {
    padding-left: 40px;
  }

  & + & {
    margin-top: 20px;
  }

  p {
    margin-bottom: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    color: var(--zero);
    font-weight: bold;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    padding: 10px;
    margin-right: 10px;
  }

  h3 {
    font-size: 1rem;
  }
`;

export const NoLogin = styled.div`
  background-color: var(--zero);
  border: 1px solid var(--gray-200);
  padding: 20px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

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

export const NoComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const Loading = styled.div`
  div {
    width: 100%;
    border: 1px solid var(--gray-200);
    height: 138px;
    border-radius: 5px;

    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 200px;
    display: inline-block;
    position: relative;

    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${shimmer};
    animation-timing-function: linear;

    & + div {
      margin-top: 20px;
    }
  }
`;
