import { GetServerSideProps } from 'next';

import NewScreen from 'screens/New';

const New = () => <NewScreen />;

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

export default New;
