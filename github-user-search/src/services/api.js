import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    // Optional token support via Vite env: VITE_APP_GITHUB_API_KEY
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? \`token \${import.meta.env.VITE_APP_GITHUB_API_KEY}\`
      : undefined,
  },
});

export default api;
