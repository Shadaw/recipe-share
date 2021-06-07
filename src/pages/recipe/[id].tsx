import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FiCalendar, FiClock, FiThumbsUp } from 'react-icons/fi';

import api from 'services/api';

import Comments from 'components/Comments';

import { Container, Info } from 'styles/recipe';

type difficultyOptions = {
  [key: string]: string;
};

const difficulty: difficultyOptions = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
};

type Recipe = {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  time: number;
  image: string;
  user: {
    name: string;
    email: string;
  };
  updated_at: string;
  created_at: string;
};

type RecipesProps = {
  recipe: Recipe;
};

export default function Recipes({ recipe }: RecipesProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title>Recipes | RecipesShare</title>
      </Head>

      <Container>
        <img src={recipe.image} alt={recipe.name} />

        <Info>
          <div>
            <span>{recipe.user.name.substr(0, 1)}</span>
            <p>{recipe.user.name}</p>
          </div>
          <div>
            <FiCalendar />
            <p>{new Date(recipe.created_at).toLocaleDateString()}</p>
          </div>
          <div>
            <FiThumbsUp />
            <p>{difficulty[recipe.difficulty]}</p>
          </div>
          <div>
            <FiClock />
            <p>{recipe.time} minutos</p>
          </div>
        </Info>

        <h1>{recipe.name}</h1>

        <p>{recipe.description}</p>

        <Comments recipe_id={recipe.id} />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/recipes?onlyid');

  const paths = response.data.map((recipe: Recipe) => {
    return { params: { id: recipe.id } };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id;

  const response = await api.get(`/recipes/${id}`);

  return {
    props: {
      recipe: response.data,
    },
    revalidate: 60,
  };
};
