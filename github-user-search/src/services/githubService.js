import api from './api';

export async function fetchUserData(username) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
