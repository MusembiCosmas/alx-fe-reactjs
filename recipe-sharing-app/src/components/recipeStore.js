import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updatedFields } : r)),
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  setRecipes: (recipes) => set({ recipes }),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => {
    const term = get().searchTerm.trim().toLowerCase();
    const all = get().recipes;
    if (!term) {
      set({ filteredRecipes: all });
    } else {
      set({
        filteredRecipes: all.filter((r) => {
          const inTitle = r.title && r.title.toLowerCase().includes(term);
          const inDesc = r.description && r.description.toLowerCase().includes(term);
          const inIngredients = r.ingredients && r.ingredients.join(' ').toLowerCase().includes(term);
          return inTitle || inDesc || inIngredients;
        }),
      });
    }
  },

  addFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.includes(id) ? state.favorites : [...state.favorites, id] })),

  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((fid) => fid !== id) })),

  generateRecommendations: () => {
    const recipes = get().recipes;
    const favs = new Set(get().favorites);
    const candidates = recipes.filter((r) => !favs.has(r.id));
    // simple random pick (up to 5)
    const shuffled = candidates.sort(() => 0.5 - Math.random());
    set({ recommendations: shuffled.slice(0, 5) });
  },
}));

export default useRecipeStore;
