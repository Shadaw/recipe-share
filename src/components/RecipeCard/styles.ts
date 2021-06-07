import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray);
  border: 1px solid var(--gray-200);
  height: 200px;
  border-radius: 5px;
  cursor: pointer;

  display: flex;

  img {
    mask-image: linear-gradient(to left, transparent 0%, black 100%);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 40%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;

  h2 {
    font-size: 1.5rem;
    color: var(--negative);
    margin-bottom: 10px;
  }

  p {
    color: #777777;
    margin-bottom: 10px;
  }
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  color: var(--gray-900);

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    & + span {
      margin-left: 2.5rem;
    }

    svg {
      color: var(--negative);
      margin-right: 10px;
    }
  }
`;
