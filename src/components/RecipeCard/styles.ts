import styled from 'styled-components';

type ContainerProps = {
  redirect: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: var(--zero);
  border: 1px solid var(--gray-200);
  height: 200px;
  border-radius: 5px;
  cursor: ${({ redirect }) => (redirect ? 'pointer' : 'normal')};

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
  position: relative;

  h2 {
    font-size: 1.5rem;
    color: var(--negative);
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

export const ActionButtons = styled.div`
  position: absolute;
  right: 1rem;
  display: flex;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background: var(--gray-900);
    color: var(--zero);
    height: 1.5rem;
    width: 1.5rem;
    padding: 2px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.1);
    }

    & + button {
      margin-left: 10px;
    }
  }
`;
