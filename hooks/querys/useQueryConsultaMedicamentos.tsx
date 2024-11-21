import { api } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

const consultaMedicamento = async () => {
  const { data } = await api.get<[]>("/home");
  return data;
};

export const useQueryConsultaMedicamento = (enabled?: boolean) => {
  return useQuery(["medicamentos", {}], () => consultaMedicamento(), {
    enabled,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 10,
    onError: (error) =>
      console.log(error, "Ocorreu um erro ao buscar medicamentos."),
  });
};
