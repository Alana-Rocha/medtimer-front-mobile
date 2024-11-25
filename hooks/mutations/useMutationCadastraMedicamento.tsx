import { api } from "@/service/api";
import { useMutation } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";
import { useAuthStore } from "../stores/AuthStore";

type MedicamentoRequest = {
  nome: string;
  descricao: string;
  dosagem: number;
  duracao: number;
  frequencia: number;
  horario: string;
};

const cadastraUsuario = async (data: MedicamentoRequest) => {
  await api.post("medicamento/cadastrar", {
    ...data,
  });
};

export const useMutationCadastraMedicamento = () => {
  return useMutation(cadastraUsuario, {
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpStatusCode.Forbidden)
          return useAuthStore.getState().logout();

        console.error("Erro na API:", {
          status: error.response?.status,
          data: error.response?.data,
        });
      } else {
        console.error("Erro desconhecido:", error);
      }
    },
  });
};
