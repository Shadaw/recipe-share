import { FaGoogle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';

const SignInButton = () => {
  const session = false;

  return session ? (
    <Container type="button">
      <FaGoogle color="#fff" />
      Gustavo Alexandre da Silva
      <FiX color="#fff" />
    </Container>
  ) : (
    <Container type="button">
      <FaGoogle color="#fff" />
      Logar com google
    </Container>
  );
};

export default SignInButton;
