import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container } from 'styles/profile';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Perfil | RecipesShare</title>
      </Head>

      <Container>
        <h1>Perfil</h1>
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
