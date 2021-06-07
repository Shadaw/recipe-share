import styled from 'styled-components';

export const Container = styled.aside`
  font-size: 1em;

  * {
    margin-bottom: 10px;
  }

  ul {
    margin-left: 30px;
  }

  color: var(--gray-900);

  ol,
  ul {
    margin-left: 20px;
  }

  aside {
    color: var(--negative);
    height: 10px;
  }
`;
