import api from "./axios";

export const getInventory = async () => {
  const { data } = await api.get("/inventory");
  return data;
};
