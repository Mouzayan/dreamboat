import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://dreamboat-api.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl,
});



// ========================================
// ================ AUTH ==================
// ========================================

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { auth: loginData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/users", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

// ========================================
// ================ users =================
// ========================================

export const getAllUsers = async () => {
  const resp = await api.get("/users");
  return resp.data;
};

export const getOneUser = async (userId) => {
  const resp = await api.get(`/users/${userId}`);
  return resp.data;
};

export const postUser = async (userData) => {
  const resp = await api.post("/users", userData);
  return resp.data;
};

export const putUser = async (userId, userData) => {
  const resp = await api.put(`/users/${userId}`, userData);
  return resp.data;
};

// export const destroyUser = async (userId) => {
//   const resp = await api.delete(`/users/${userId}`);
//   return resp;
// };

// ========================================
// =============== encounters =============
// ========================================

export const getAllEncounters = async (userId) => {
  const resp = await api.get(`/users/${userId}/encounters`);
  return resp.data;
};

export const getOneEncounter = async (userId, encounterId) => {
  const resp = await api.get(`/users/${userId}/encounters/${encounterId}`);
  return resp.data;
};

export const postEncounter = async (userId, encounterData) => {
  const resp = await api.post(`/users/${userId}/encounters`, encounterData);
  return resp.data;
};

export const putEncounter = async (userId, encounterId, encounterData) => {
  const resp = await api.put(
    `/users/${userId}/encounters/${encounterId}`,
    encounterData
  );
  return resp.data;
};

export const destroyEncounter = async (userId, encounterId) => {
  const resp = await api.delete(`/users/${userId}/encounters/${encounterId}`);
  return resp;
};

// ========================================
// ====== encounters and comments =========
// ========================================

export const postComment = async (userId, encounterId, commentData) => {
  const resp = await api.post(
    `/users/${userId}/encounters/${encounterId}/comments`,
    commentData
  )
  return resp.data
};

export const getAllComments = async (userId, encounterId, commentData) => {
  const resp = await api.get(
    `/users/${userId}/encounters${encounterId}/comments`,
    commentData
  );
  return resp.data;
};
