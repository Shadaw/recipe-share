import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import {
  FiCalendar,
  FiClock,
  FiThumbsUp,
  FiTrash,
  FiEdit2,
} from 'react-icons/fi';
import removeMd from 'remove-markdown';

import { Container, Content, Information, ActionButtons } from './styles';

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
  redirect?: boolean;
  handleEdit?: (id: string) => void;
  handleDelete?: (id: string) => void;
};

const RecipeCard = ({
  recipe,
  redirect = true,
  handleDelete,
  handleEdit,
}: RecipeCardProps) => {
  const router = useRouter();

  const formatedDate = useMemo(
    () => new Date(recipe.updated_at).toLocaleDateString(),
    [recipe.updated_at],
  );

  const handleRedirectToExpandRecipe = useCallback(() => {
    router.push(`recipe/${recipe.id}`);
  }, [recipe.id, router]);

  return (
    <Container
      redirect={redirect}
      onClick={redirect ? handleRedirectToExpandRecipe : undefined}
    >
      <img src={recipe.image} alt={recipe.name} />
      <Content>
        <ActionButtons>
          {handleEdit && (
            <button title="Editar" onClick={() => handleEdit(recipe.id)}>
              <FiEdit2 />
            </button>
          )}
          {handleDelete && (
            <button title="Excluir" onClick={() => handleDelete(recipe.id)}>
              <FiTrash />
            </button>
          )}
        </ActionButtons>
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
