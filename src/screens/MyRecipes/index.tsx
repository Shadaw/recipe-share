import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { useAuth } from 'hooks/auth';
import api from 'services/api';

import LoadingCards from 'components/LoadingCards';
import RecipeCard from 'components/RecipeCard';

import { Container } from './styles';

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

const MyRecipes = () => {
  const { user, token } = useAuth();
  const router = useRouter();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(false);

  const requestRecipes = useCallback(async () => {
    setError(false);
    try {
      const response = await api.get(`/recipes?by=${user.id}`);
      setRecipes(response.data);
    } catch {
      setError(false);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    requestRecipes();
  }, [requestRecipes]);

  const handleRedirectToEditScreen = useCallback(
    (id: string) => {
      router.push(`/edit/${id}`);
    },
    [router],
  );

  const handleDeleteRecipe = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/recipes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRecipes(recipes.filter(recipe => recipe.id !== id));
      } catch {
        console.log('erro');
      }
    },
    [recipes, setRecipes, token],
  );

  return (
    <>
      <Head>
        <title>Minhas receitas | RecipesShare</title>
      </Head>

      <Container>
        {loading && <LoadingCards />}
        {!loading &&
          recipes.map(recipe => (
            <RecipeCard
              redirect={false}
              handleEdit={handleRedirectToEditScreen}
              handleDelete={handleDeleteRecipe}
              key={recipe.id}
              recipe={recipe}
            />
          ))}
      </Container>
    </>
  );
};

export default MyRecipes;
