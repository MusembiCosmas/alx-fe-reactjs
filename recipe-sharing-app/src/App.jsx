import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '10px' }}>
        <h1 style={{ textAlign: 'center' }}>Recipe Sharing App</h1>

        <Routes>
          <Route path="/" element={<div><RecipeList /><AddRecipeForm /></div>} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
