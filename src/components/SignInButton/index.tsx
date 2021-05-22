import { useCallback } from 'react';
import { FaUser } from 'react-icons/fa';

import { useAuth } from 'hooks/auth';
import { useModal } from 'hooks/modal';

import { Container } from './styles';

const SignInButton = () => {
  const { user, signOut } = useAuth();
  const { setIsOpen } = useModal();

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return user ? (
    <Container type="button" onClick={handleLogout}>
      {user.name}
    </Container>
  ) : (
    <Container type="button" onClick={handleOpenModal}>
      <div>
        <FaUser />
      </div>
      Login
    </Container>
  );
};

export default SignInButton;
