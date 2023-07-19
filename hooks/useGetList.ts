import { useQuery } from "@tanstack/react-query";
import * as services from "@/services";
import { IApiResponsePengeluaran } from "@/types";

const useGetCostList = () => {
  let token;
  if (typeof window !== "undefined") {
    const tokenFromLocal = localStorage.getItem("token");
    token = JSON.parse(tokenFromLocal!);
  }

  if (token) {
    const data = useQuery<IApiResponsePengeluaran>(["cost-list"], async () => {
      const { data: axiosData } = await services.costList();
      return axiosData;
    });
    return data;
  } else {
    const data: any = [];
    return data;
  }
};

export default useGetCostList;
