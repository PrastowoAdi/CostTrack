import { useQuery } from "@tanstack/react-query";
import * as services from "@/services";
import { IApiResponsePengeluaran, IListCost } from "@/types";

const useGetCostList = () => {
  let token: any;
  if (typeof window !== "undefined") {
    const tokenFromLocal = localStorage.getItem("token");
    token = JSON.parse(tokenFromLocal!);
  }

  const data = useQuery<IApiResponsePengeluaran>(["cost-list"], async () => {
    if (token) {
      const { data: axiosData } = await services.costList();
      return axiosData;
    } else {
      return [];
    }
  });
  return data;
};

export default useGetCostList;
