import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Hero, SearchButton } from './styles';

const Home = () => {
  const router = useRouter();

  const handleRedirectToRecipes = useCallback(() => {
    router.push('recipes');
  }, [router]);

  return (
    <>
      <Head>
        <title>Home | RecipesShare</title>
      </Head>

      <Container>
        <Hero>
          <span>👏 Seja bem vindo</span>
          <h1>
            Pesquise e compartilhe <span>Receitas</span>.
          </h1>
          <SearchButton onClick={handleRedirectToRecipes}>
            Buscar receitas
            <FaArrowRight />
          </SearchButton>
        </Hero>

        <img src="/images/chefe.svg" alt="homem cozinhando" />
      </Container>
    </>
  );
};

export default Home;
