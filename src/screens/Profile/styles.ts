import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 5rem);
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  background: var(--zero);
  padding: 40px;
  border-radius: 5px;
  border: 1px solid var(--gray-200);
  margin-bottom: 2rem;

  h2 {
    color: var(--negative);
    margin-bottom: 5px;
  }

  p {
    color: var(--gray-900);
    margin-bottom: 5px;
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: var(--primary);
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: var(--zero);
`;

export const DashBoard = styled.div`
  display: flex;

  div {
    & + div {
      margin-left: 2rem;
    }
  }
`;

export const RecipesCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--zero);
  padding: 40px 20px;
  border-radius: 5px;
  border: 1px solid var(--gray-200);
  width: 100%;
  color: var(--gray-900);

  svg {
    color: var(--negative);
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

export const CommentsCount = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--zero);
  padding: 40px 20px;
  border-radius: 5px;
  border: 1px solid var(--gray-200);
  width: 100%;
  color: var(--gray-900);

  svg {
    color: var(--negative);
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;
