import Head from 'next/head';
import { FiMessageSquare, FiBook } from 'react-icons/fi';

import { useAuth } from 'hooks/auth';

import {
  Container,
  Icon,
  Info,
  DashBoard,
  RecipesCount,
  CommentsCount,
} from './styles';
import { useEffect } from 'react';
import api from 'services/api';
import { useState } from 'react';

type Dashboard = {
  recipes: number;
  comments: number;
};

const Profile = () => {
  const { user, token } = useAuth();
  const [dashboard, setDashboard] = useState<Dashboard>({
    comments: 0,
    recipes: 0,
  });

  useEffect(() => {
    const requestDashboard = async () => {
      const response = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDashboard(response.data);
    };
    requestDashboard();
  }, [token]);

  return (
    <>
      <Head>
        <title>Perfil | RecipesShare</title>
      </Head>

      <Container>
        <Info>
          <Icon>{user.name.substr(0, 1)}</Icon>
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>
              Conta criada em: {new Date(user.created_at).toLocaleDateString()}
            </p>
          </div>
        </Info>
        <DashBoard>
          <RecipesCount>
            <FiBook />
            {dashboard.recipes}
            {dashboard.recipes <= 1
              ? ' receita cadastrada'
              : ' receitas cadastradas'}
          </RecipesCount>
          <CommentsCount>
            <FiMessageSquare />
            {dashboard.comments}{' '}
            {dashboard.comments <= 1
              ? ' comentario em suas receitas.'
              : ' comentarios em suas receitas'}
          </CommentsCount>
        </DashBoard>
      </Container>
    </>
  );
};

export default Profile;
