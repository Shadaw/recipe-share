import SignInButton from 'components/SignInButton';
import { ActiveLink } from 'components/ActiveLink';

import { Container, Content } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" alt="RecipesShare" />
        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/recipes">Receitas</ActiveLink>
        </nav>
        <SignInButton />
      </Content>
    </Container>
  );
};

export default Header;
