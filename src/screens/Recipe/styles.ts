import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 5rem);
  color: var(--negative);

  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  > h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--gray-900);
  }

  > p {
    line-height: 1.4rem;
    margin: auto 0;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

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

    svg {
      margin-right: 10px;
    }
  }
`;
