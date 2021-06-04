import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';

import api from 'services/api';

import LoadingCards from 'components/LoadingCards';
import RecipeCard from 'components/RecipeCard';

import { Container } from 'styles/recipes';

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

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(false);

  const requestRecipes = useCallback(async () => {
    setError(false);
    try {
      const response = await api.get('/recipes');
      setRecipes(response.data);
    } catch {
      setError(false);
    }
    setLoading(false);
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
        {loading && <LoadingCards />}
        {!loading &&
          recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </Container>
    </>
  );
}
