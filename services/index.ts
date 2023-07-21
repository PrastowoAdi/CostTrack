import {
  IFormDana,
  IFormDelete,
  IFormLogin,
  IFormPengeluaran,
  IFormRegister,
} from "@/types";
import * as utils from "@/utils";

export const costList = async () => {
  return await utils.HttpClient.get("/api/cost-track");
};

export const addPengeluaran = async (payload: IFormPengeluaran) => {
  const newPayload = {
    pengeluaran: payload.pengluaran,
  };
  return await utils.HttpClient.put(`/api/cost-track`, newPayload);
};

export const deletePengeluaran = async (payload: IFormDelete) => {
  return await utils.HttpClient.delete(
    `/api/cost-track/delete-dana/${payload.id}`
  );
};

export const updateDana = async (payload: IFormDana) => {
  const newPayload = {
    dana: payload.dana,
  };
  return await utils.HttpClient.put(`/api/cost-track/update-dana`, newPayload);
};

export const login = async (payload: IFormLogin) => {
  return await utils.HttpClient.post(`/api/cost-track/login`, payload);
};

export const register = async (payload: IFormRegister) => {
  return await utils.HttpClient.post(`/api/cost-track`, payload);
};
