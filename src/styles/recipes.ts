import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 5rem);

  > div + div {
    margin-top: 2rem;
  }
`;
