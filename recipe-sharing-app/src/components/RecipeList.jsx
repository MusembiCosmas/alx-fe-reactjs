import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  if (!recipes || recipes.length === 0) {
    return <p style={{ padding: '20px' }}>No recipes yet. Add one!</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {recipes.map((r) => (
        <div key={r.id} style={{ border: '1px solid #eee', padding: '10px', marginBottom: '10px', borderRadius: '6px' }}>
          <h3 style={{ margin: 0 }}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </h3>
          <p style={{ marginTop: '6px' }}>{r.description}</p>
          <div style={{ marginTop: '8px' }}>
            <button onClick={() => deleteRecipe(r.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
