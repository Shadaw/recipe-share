import { useCallback } from 'react';
import { FaUser } from 'react-icons/fa';

import { useAuth } from 'hooks/auth';
import { useModal } from 'hooks/modal';

import Dropdown from 'components/Dropdown';

import { Container } from './styles';

const SignInButton = () => {
  const { user } = useAuth();
  const { setIsOpen } = useModal();

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return user ? (
    <Dropdown>
      <Container type="button">{user.name.substr(0, 1)}</Container>
    </Dropdown>
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
