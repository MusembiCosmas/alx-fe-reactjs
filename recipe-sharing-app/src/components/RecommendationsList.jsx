import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

function RecommendationsList() {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generate = useRecipeStore((s) => s.generateRecommendations);

  if (!recommendations || recommendations.length === 0) {
    return (
      <div style={{ marginTop: '12px' }}>
        <button onClick={generate}>Generate Recommendations</button>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '12px', padding: '10px', border: '1px dashed #ddd' }}>
      <h3>Recommendations</h3>
      {recommendations.map((r) => (
        <div key={r.id}>
          <Link to={`/recipe/${r.id}`}>{r.title}</Link>
        </div>
      ))}
      <div style={{ marginTop: '8px' }}>
        <button onClick={generate}>Refresh</button>
      </div>
    </div>
  );
}

export default RecommendationsList;
