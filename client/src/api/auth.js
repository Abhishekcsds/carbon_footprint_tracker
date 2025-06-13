import axios from 'axios';

const API_URL = '/api/auth';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials, {
    withCredentials: true
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`, {}, {
    withCredentials: true
  });
  return response.data;
};

export const getUser = async () => {
  const response = await axios.get(`${API_URL}/user`, {
    withCredentials: true
  });
  return response.data;
};