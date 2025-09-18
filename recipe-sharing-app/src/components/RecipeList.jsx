import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);
  const filtered = useRecipeStore((s) => s.filteredRecipes);
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);
  const favorites = useRecipeStore((s) => s.favorites);

  const list = searchTerm ? filtered : recipes;

  if (!list || list.length === 0) return <p style={{ padding: '20px' }}>No recipes yet. Add one!</p>;

  return (
    <div style={{ padding: '20px' }}>
      {list.map((r) => (
        <div key={r.id} style={{ border: '1px solid #eee', padding: '10px', marginBottom: '10px', borderRadius: '6px' }}>
          <h3 style={{ margin: 0 }}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </h3>
          <p style={{ marginTop: '6px' }}>{r.description}</p>
          <div style={{ marginTop: '8px' }}>
            <button onClick={() => deleteRecipe(r.id)} style={{ marginRight: '8px' }}>Delete</button>
            {favorites.includes(r.id) ? (
              <button onClick={() => removeFavorite(r.id)}>Unfavorite</button>
            ) : (
              <button onClick={() => addFavorite(r.id)}>Favorite</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
