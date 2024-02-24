import axios from "./axios";

export const loginRequest = async (user) => axios.post(`/login`, user);
export const logoutRequest = async (token) => axios.post(`/logout`,{}, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
export const verifyTokenRequest = async (token) => axios.get(`/user-profile`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});