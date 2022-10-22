import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiCalendar, FiClock, FiThumbsUp } from 'react-icons/fi';

import Comments from 'components/Comments';

import { Container, Info, Description } from './styles';

type difficultyOptions = {
  [key: string]: string;
};

const difficulty: difficultyOptions = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
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

type RecipesProps = {
  recipe: Recipe;
};

const Recipes = ({ recipe }: RecipesProps) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title>Recipes | RecipesShare</title>
      </Head>

      <Container>
        <img src={recipe.image} alt={recipe.name} />

        <Info>
          <div>
            <span>{recipe.user.name.substr(0, 1)}</span>
            <p>{recipe.user.name}</p>
          </div>
          <div>
            <FiCalendar />
            <p>{new Date(recipe.created_at).toLocaleDateString()}</p>
          </div>
          <div>
            <FiThumbsUp />
            <p>{difficulty[recipe.difficulty]}</p>
          </div>
          <div>
            <FiClock />
            <p>{recipe.time} minutos</p>
          </div>
        </Info>

        <h1>{recipe.name}</h1>

        <Description dangerouslySetInnerHTML={{ __html: recipe.description }} />

        <Comments recipe_id={recipe.id} />
      </Container>
    </>
  );
};

export default Recipes;
