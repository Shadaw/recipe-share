import { FiClock, FiThumbsUp } from 'react-icons/fi';

import { Container, Content, Information } from './styles';

type Recipe = {
  id: number;
  name: string;
  description: string;
  dificult: string;
  image: string;
};

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Container>
      <img src={recipe.image} alt={recipe.name} />
      <Content>
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
        <div>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
        </div>
      </Content>
    </Container>
  );
};

export default RecipeCard;
