import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  label {
    width: 100%;
    margin: 0 !important;
  }

  .quill {
    width: 100%;
    margin-top: 10px;
    background: var(--zero);

    .ql-toolbar.ql-snow {
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      border-color: var(--gray-200);
      background-color: #fdfdfd;
    }

    .ql-container.ql-snow {
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-color: var(--gray-200);
      min-height: 200px;
    }
  }
`;
