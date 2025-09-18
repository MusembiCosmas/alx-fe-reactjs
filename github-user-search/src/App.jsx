import SearchBar from './components/SearchBar';

function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
      <p style={{ textAlign: 'center' }}>Type a username and press Search (uses axios via src/services/api.js)</p>
      <SearchBar />
    </div>
  );
}

export default App;
