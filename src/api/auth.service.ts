import api from "./axios";

export const login = async (username: string, password: string) => {
  const { data } = await api.post("/auth/login", { username, password });
  return data;
};
