import { GetServerSideProps } from 'next';

import ProfileScreen from 'screens/Profile';

const Profile = () => <ProfileScreen />;

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

export default Profile;
