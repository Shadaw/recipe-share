import Head from 'next/head';

import RecipeCard from 'components/RecipeCard';

import { Container } from 'styles/recipes';

import api from 'services/api';
import { useCallback, useEffect, useState } from 'react';

type Recipe = {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  time: number;
  user: {
    name: string;
    email: string;
  };
  updated_at: string;
  created_at: string;
};

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const requestRecipes = useCallback(async () => {
    const response = await api.get('/recipes');

    setRecipes(response.data);
  }, []);

  useEffect(() => {
    requestRecipes();
  }, [requestRecipes]);

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
