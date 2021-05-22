import { FiClock, FiThumbsUp } from 'react-icons/fi';

import { Container, Content, Information } from './styles';

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
  return (
    <Container>
      <img src={recipe.image} alt={recipe.name} />
      <Content>
        <div>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
        </div>
        <Information>
          <span>
            <FiClock />
            30 minutes
          </span>
          <span>
            <FiThumbsUp />
            Facil
          </span>
        </Information>
      </Content>
    </Container>
  );
};

export default RecipeCard;
