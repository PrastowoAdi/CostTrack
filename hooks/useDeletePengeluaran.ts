import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IFormDelete } from "@/types";

const useAddPengeluaran = () => {
  const data = useMutation(async (payload: IFormDelete) => {
    return await services.deletePengeluaran(payload);
  });
  return data;
};

export default useAddPengeluaran;
