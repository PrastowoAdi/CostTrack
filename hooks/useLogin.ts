import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IFormLogin } from "@/types";

const useLogin = () => {
  const data = useMutation(async (payload: IFormLogin) => {
    return await services.login(payload);
  });
  return data;
};

export default useLogin;
