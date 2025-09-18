import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

function SearchBar() {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);

  useEffect(() => {
    // re-run filtering when searchTerm changes
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div style={{ padding: '10px 0' }}>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search recipes..."
        style={{ width: '100%', padding: '8px' }}
      />
    </div>
  );
}

export default SearchBar;
