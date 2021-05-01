import Head from 'next/head';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Hero, SearchButton } from '../styles/home';

export default function Home() {
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
          <SearchButton>
            Buscar receitas
            <FaArrowRight />
          </SearchButton>
        </Hero>

        <img src="/images/chefe.svg" alt="homem cozinhando" />
      </Container>
    </>
  );
}
