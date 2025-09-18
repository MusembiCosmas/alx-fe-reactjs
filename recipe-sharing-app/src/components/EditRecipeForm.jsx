import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { title: title.trim(), description: description.trim() });
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '12px', borderTop: '1px dashed #ddd', paddingTop: '12px' }}>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ width: '100%', padding: '8px', marginBottom: '8px' }} />
      </div>
      <div>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={{ width: '100%', padding: '8px', marginBottom: '8px' }} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditRecipeForm;
