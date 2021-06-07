import { useCallback, useState } from 'react';
import { FiX } from 'react-icons/fi';

import { useModal } from 'hooks/modal';

import Login from 'components/Login';
import Register from 'components/Register';

import { Background, Container, Header } from './styles';

const Modal = () => {
  const { isOpen, setIsOpen } = useModal();

  const [showLogin, setShowLogin] = useState(true);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setShowLogin(true);
  }, [setIsOpen]);

  return isOpen ? (
    <Background>
      <Container>
        <Header>
          <button onClick={handleClose}>
            <FiX />
          </button>
        </Header>
        {showLogin && <Login handleClose={handleClose} />}
        {!showLogin && <Register handleShowLogin={setShowLogin} />}
        {showLogin && (
          <button onClick={() => setShowLogin(false)}>
            usuario novo? criar uma conta.
          </button>
        )}
      </Container>
    </Background>
  ) : (
    <></>
  );
};

export default Modal;
