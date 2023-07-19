import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IFormDana } from "@/types";

const useUpdateDana = () => {
  const data = useMutation(async (payload: IFormDana) => {
    return await services.updateDana(payload);
  });
  return data;
};

export default useUpdateDana;
