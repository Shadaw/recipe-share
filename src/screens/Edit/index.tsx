import { useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from 'hooks/auth';
import api from 'services/api';

import ImageUpload from 'components/ImageUpload';
import TextareaWithPreview from 'components/TextareaWithPreview';

import { Container, Footer } from './styles';

export type FormProps = {
  name: string;
  description: string;
  difficulty: string;
  time: number;
  image: File[];
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

type EditProps = {
  recipe: Recipe;
};

const Edit = ({ recipe }: EditProps) => {
  const router = useRouter();
  const { token } = useAuth();

  const { register, handleSubmit, control } = useForm<FormProps>({
    defaultValues: {
      name: recipe.name,
      description: recipe.description,
      difficulty: recipe.difficulty,
      time: recipe.time,
    },
  });

  const handleUpdateRecipe: SubmitHandler<FormProps> = useCallback(
    async data => {
      console.log('teste');
      console.log(data);

      try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('difficulty', data.difficulty);
        formData.append('time', String(data.time));
        formData.append('image', data.image[0]);

        await api.put(`/recipes/${recipe.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        router.push('/my_recipes');
      } catch {
        console.log('erro');
      }
    },
    [router, token, recipe.id],
  );

  return (
    <>
      <Head>
        <title>Editar receita | RecipesShare</title>
      </Head>

      <Container>
        <h1>Editar receita</h1>
        <form onSubmit={handleSubmit(handleUpdateRecipe)}>
          <ImageUpload value={recipe.image} register={register} />

          <label>
            Nome da receita
            <input {...register('name')} type="text" />
          </label>

          <TextareaWithPreview label="Descrição" control={control} />

          <div>
            <label>
              Dificuldade
              <select {...register('difficulty')}>
                <option value="easy">Fácil</option>
                <option value="medium">Médio</option>
                <option value="hard">Difícil</option>
              </select>
            </label>
            <label>
              Tempo
              <input
                {...register('time')}
                placeholder="em minutos..."
                type="text"
              />
            </label>
          </div>

          <Footer>
            <button type="submit">Editar</button>
          </Footer>
        </form>
      </Container>
    </>
  );
};

export default Edit;
