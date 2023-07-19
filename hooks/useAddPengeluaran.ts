import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IFormPengeluaran } from "@/types";

const useAddPengeluaran = () => {
  const data = useMutation(async (payload: IFormPengeluaran) => {
    return await services.addPengeluaran(payload);
  });
  return data;
};

export default useAddPengeluaran;
