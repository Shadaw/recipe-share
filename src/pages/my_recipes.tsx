import { GetServerSideProps } from 'next';

import MyRecipesScreen from 'screens/MyRecipes';

const MyRecipes = () => <MyRecipesScreen />;

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

export default MyRecipes;
