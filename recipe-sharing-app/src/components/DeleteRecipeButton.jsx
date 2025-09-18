import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handle = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return <button onClick={handle} style={{ marginLeft: '8px' }}>Delete Recipe</button>;
}

export default DeleteRecipeButton;
