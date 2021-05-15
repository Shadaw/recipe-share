import { ReactNode } from 'react';
import { FiX } from 'react-icons/fi';

import { Background, Container, Header } from './styles';

type ModalProps = {
  children: ReactNode;
  handleClose: () => void;
  title: string;
};

const Modal = ({ children, title, handleClose }: ModalProps) => {
  return (
    <Background>
      <Container>
        <Header>
          <h2>{title}</h2>
          <button onClick={handleClose}>
            <FiX />
          </button>
        </Header>
        {children}
      </Container>
    </Background>
  );
};

export default Modal;
