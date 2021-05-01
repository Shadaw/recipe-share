import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 60%;
  }
`;

export const Hero = styled.section`
  max-width: 600px;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;

    span {
      color: var(--negative);
    }
  }

  button {
    margin-top: 2.5rem;
  }
`;

export const SearchButton = styled.button`
  position: relative;
  width: 260px;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: var(--primary);
  color: var(--zero);
  font-size: 1.25rem;
  font-weight: bold;
  box-shadow: 0 0 10px var(--primary);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    margin-left: 20px;
  }
`;
