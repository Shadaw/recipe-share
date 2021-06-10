import { GetStaticPaths, GetStaticProps } from 'next';

import RecipeScreen from 'screens/Recipe';

import api from 'services/api';

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

const Recipes = ({ recipe }: RecipesProps) => <RecipeScreen recipe={recipe} />;

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

export default Recipes;
