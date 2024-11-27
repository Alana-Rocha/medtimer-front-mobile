import { api } from "@/service/api";
import { useMutation } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";
import Toast from "react-native-toast-message";
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
        if (error.response?.status === HttpStatusCode.Forbidden) {
          useAuthStore.getState().logout();
          return;
        }

        const message =
          error.response?.data?.message ||
          "Ocorreu um erro ao cadastrar o medicamento.";

        Toast.show({
          type: "error",
          text1: "Erro ao cadastrar medicamento",
          text2: message,
        });

        console.error("Erro na API:", {
          status: error.response?.status,
          data: error.response?.data,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Erro desconhecido",
          text2: "Ocorreu um erro inesperado.",
        });

        console.error("Erro desconhecido:", error);
      }
    },
  });
};
