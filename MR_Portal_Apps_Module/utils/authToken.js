let accessToken = null;

export const getAccessToken = () => accessToken;

export const setAccessToken = (token) => {
  accessToken = typeof token === "string" && token.trim() ? token.trim() : null;
  return accessToken;
};

export const clearAccessToken = () => {
  accessToken = null;
};

export const getAccessTokenFromResponse = (response) =>
  response?.access_token ||
  response?.accessToken ||
  response?.token ||
  response?.data?.access_token ||
  response?.data?.accessToken ||
  response?.data?.token ||
  response?.data?.data?.access_token ||
  response?.data?.data?.accessToken ||
  response?.data?.data?.token ||
  null;
