import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
