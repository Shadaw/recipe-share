import Head from 'next/head';

import RecipeCard from 'components/RecipeCard';

import { Container } from 'styles/recipes';

const recipes = [
  {
    id: 1,
    name: 'Bolo de cenoura',
    description: 'bolo de cenoura com cobertura de chocolate',
    dificult: 'easy',
    image:
      'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400',
  },
  {
    id: 2,
    name: 'Macaronada',
    description: 'Macaronada com molho rosa',
    dificult: 'medium',
    image:
      'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400',
  },
  {
    id: 3,
    name: 'Macaronada',
    description: 'Macaronada com molho rosa',
    dificult: 'medium',
    image:
      'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400',
  },
  {
    id: 4,
    name: 'Macaronada',
    description: 'Macaronada com molho rosa',
    dificult: 'medium',
    image:
      'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400',
  },
  {
    id: 5,
    name: 'Macaronada',
    description: 'Macaronada com molho rosa',
    dificult: 'medium',
    image:
      'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400',
  },
  {
    id: 6,
    name: 'Macaronada',
    description: 'Macaronada com molho rosa',
    dificult: 'medium',
    image:
      'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400',
  },
  {
    id: 7,
    name: 'Macaronada',
    description: 'Macaronada com molho rosa',
    dificult: 'medium',
    image:
      'https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400',
  },
];

export default function Recipes() {
  return (
    <>
      <Head>
        <title>Recipes | RecipesShare</title>
      </Head>

      <Container>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Container>
    </>
  );
}
