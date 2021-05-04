import SignInButton from 'components/SignInButton';

import { Container, Content, NavItem } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" alt="RecipesShare" />
        <nav>
          <NavItem active>Home</NavItem>
          <NavItem>Receitas</NavItem>
        </nav>
        <SignInButton />
      </Content>
    </Container>
  );
};

export default Header;
