import { useCallback } from 'react';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from 'hooks/auth';
import api from 'services/api';

import ImageUpload from 'components/ImageUpload';
import TextareaWithPreview from 'components/TextareaWithPreview';

import { Container, Footer } from 'styles/new';
import { GetServerSideProps } from 'next';

export type FormProps = {
  name: string;
  description: string;
  difficulty: string;
  time: number;
  image: File[];
};

export default function New() {
  const { token } = useAuth();

  const { register, handleSubmit } = useForm<FormProps>({
    mode: 'onChange',
  });

  const handleCreateNewRecipe: SubmitHandler<FormProps> = useCallback(
    async data => {
      try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('difficulty', data.difficulty);
        formData.append('time', String(data.time));
        formData.append('image', data.image[0]);

        await api.post('/recipes', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch {
        console.log('erro');
      }
    },
    [token],
  );

  return (
    <>
      <Head>
        <title>Nova receita | RecipesShare</title>
      </Head>

      <Container>
        <h1>Nova receita</h1>
        <form
          onSubmit={handleSubmit(handleCreateNewRecipe)}
          encType="multipart/form-data"
        >
          <ImageUpload register={register} />

          <label>
            Nome da receita
            <input {...register('name', { required: true })} type="text" />
          </label>

          <TextareaWithPreview label="Descrição" register={register} />

          <div>
            <label>
              Dificuldade
              <select {...register('difficulty', { required: true })}>
                <option value="easy">Fácil</option>
                <option value="medium">Médio</option>
                <option value="hard">Difícil</option>
              </select>
            </label>
            <label>
              Tempo
              <input
                {...register('time', { required: true })}
                placeholder="em minutos..."
                type="text"
              />
            </label>
          </div>

          <Footer>
            <button type="submit">Criar</button>
          </Footer>
        </form>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies['@RecipesShare:token'];

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
