const tokenKey = "myToken";

export const setToken = (token) => {
  return window.localStorage.setItem(tokenKey, token);
};

export const getToken = () => {
  return window.localStorage.getItem(tokenKey);
};

export const removeToken = () => {
  return window.localStorage.removeItem(tokenKey);
};
