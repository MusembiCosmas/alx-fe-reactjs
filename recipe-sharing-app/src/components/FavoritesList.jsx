import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function FavoritesList() {
  const favorites = useRecipeStore((s) => s.favorites);
  const recipes = useRecipeStore((s) => s.recipes);

  const favRecipes = favorites.map((id) => recipes.find((r) => r.id === id)).filter(Boolean);

  if (favRecipes.length === 0) return null;

  return (
    <div style={{ margin: '10px 0', padding: '10px', border: '1px solid #eee', borderRadius: '6px' }}>
      <h3 style={{ marginTop: 0 }}>Favorites</h3>
      {favRecipes.map((r) => (
        <div key={r.id}>
          <Link to={`/recipe/${r.id}`}>{r.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
