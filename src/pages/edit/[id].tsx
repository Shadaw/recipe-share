import { GetServerSideProps } from 'next';

import EditScreen from 'screens/Edit';

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

type EditProps = {
  recipe: Recipe;
};

const Edit = ({ recipe }: EditProps) => <EditScreen recipe={recipe} />;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const id = params?.id;

  const token = req.cookies['@RecipesShare:token'];

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const response = await api.get(`/recipes/${id}`);

  return {
    props: {
      recipe: response.data,
    },
  };
};

export default Edit;
