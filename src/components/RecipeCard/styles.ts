import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray);
  border: 1px solid var(--gray-200);

  h2 {
    margin-top: 0.5rem;
    color: var(--negative);
  }

  p {
    margin-top: 0.5rem;
    color: #4a4a4a;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 1rem 1.5rem 2rem 1.5rem;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 16px;
    color: #4a4a4a;

    svg {
      margin-right: 5px;
    }
  }
`;
