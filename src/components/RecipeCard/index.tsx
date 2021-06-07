import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { FiCalendar, FiClock, FiThumbsUp } from 'react-icons/fi';
import removeMd from 'remove-markdown';

import { Container, Content, Information } from './styles';

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

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const router = useRouter();

  const formatedDate = useMemo(
    () => new Date(recipe.updated_at).toLocaleDateString(),
    [recipe.updated_at],
  );

  const handleRedirectToExpandRecipe = useCallback(() => {
    router.push(`recipe/${recipe.id}`);
  }, [recipe.id, router]);

  return (
    <Container onClick={handleRedirectToExpandRecipe}>
      <img src={recipe.image} alt={recipe.name} />
      <Content>
        <div>
          <h2>{recipe.name}</h2>
          <p>{removeMd(recipe.description)}</p>
        </div>
        <Information>
          <span>
            <FiCalendar />
            {formatedDate}
          </span>
          <span>
            <FiThumbsUp />
            {difficulty[`${recipe.difficulty}`]}
          </span>
          <span>
            <FiClock />
            {recipe.time} minutos
          </span>
        </Information>
      </Content>
    </Container>
  );
};

export default RecipeCard;
