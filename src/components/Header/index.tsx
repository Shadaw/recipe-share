import SignInButton from 'components/SignInButton';

import ActiveLink from 'components/ActiveLink';

import { Container, Content } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" alt="RecipesShare" />
        <nav>
          <ActiveLink href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/recipes">
            <a>Receitas</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </Content>
    </Container>
  );
};

export default Header;
