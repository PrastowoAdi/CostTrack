import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IFormRegister } from "@/types";

const useRegister = () => {
  const data = useMutation(async (payload: IFormRegister) => {
    return await services.register(payload);
  });
  return data;
};

export default useRegister;
