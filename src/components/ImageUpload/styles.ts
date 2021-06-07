import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 400px;
  width: 100%;
  border: 2px dashed var(--gray-200);
  border-radius: 5px;
  background-color: var(--zero);
  font-weight: bold;
  color: var(--negative);
  line-height: normal;

  div {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      p {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      position: relative;
      transition: filter 0.2s;

      &:hover {
        filter: grayscale(1);
        filter: brightness(0.4);
      }
    }

    p {
      opacity: 0;
      color: var(--zero);
      font-weight: bold;
      font-size: 2rem;
      position: absolute;
      transition: opacity 0.2s;
      padding: 20px;
      border: 1px dashed var(--zero);
      border-radius: 5px;
    }
  }
`;
