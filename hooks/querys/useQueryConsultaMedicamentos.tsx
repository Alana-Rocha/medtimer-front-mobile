import { api } from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";
import { useAuthStore } from "../stores/AuthStore";

export type ConsultaMedicamentoResponse = {
  id: number;
  nome: string;
  descricao: string;
  dosagem: number;
  duracao: number;
  frequencia: number;
  horario: string;
};

const consultaMedicamento = async () => {
  const { data } = await api.get<ConsultaMedicamentoResponse[]>(
    "medicamento/listar"
  );
  return data;
};

export const useQueryConsultaMedicamento = (enabled?: boolean) => {
  return useQuery(["medicamentos", {}], () => consultaMedicamento(), {
    enabled,
    refetchOnWindowFocus: true,
    retry: false,
    staleTime: 1000 * 60 * 10,
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpStatusCode.Forbidden)
          return useAuthStore.getState().logout();
      }
      console.log(error, "Ocorreu um erro ao consultar medicamentos.");
    },
  });
};
