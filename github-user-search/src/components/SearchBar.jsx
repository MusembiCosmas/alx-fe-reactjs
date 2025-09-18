import { useState } from 'react';
import api from '../services/api';

function SearchBar() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  async function handleSearch(e) {
    e.preventDefault();
    if (!username) return;
    setError('');
    try {
      const res = await api.get(\`/users/\${username}\`);
      setUser(res.data);
    } catch (err) {
      setUser(null);
      setError('User not found or API error');
    }
  }

  return (
    <div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8 }}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub username"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ marginTop: 12 }}>
          <img src={user.avatar_url} alt="avatar" width="64" height="64" style={{ borderRadius: 8 }} />
          <div>
            <a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
            <div>{user.name}</div>
            <div>{user.bio}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
