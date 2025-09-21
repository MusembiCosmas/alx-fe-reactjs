import React from 'react';
import Search from './components/Search';
import './index.css';

function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
