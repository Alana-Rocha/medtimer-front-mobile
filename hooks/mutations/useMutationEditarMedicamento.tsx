import { api } from "@/service/api";
import { ApiError } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export type MedicamentoEditarRequest = {
  nome: string;
  descricao: string;
  dosagem: number;
  duracao: number;
  frequencia: number;
  horario: string;
};

const editarMedicamento = async (data: MedicamentoEditarRequest) => {
  await api.put("medicamento/editar", {
    ...data,
  });
};

export const useMutationEditarMedicamento = () => {
  return useMutation(editarMedicamento, {
    onError: (error: ApiError) => {
      const message =
        error.response?.data?.message ||
        "Ocorreu um erro ao editar dados do medicamento.";
      Toast.show({
        type: "error",
        text1: "Erro ao editar medicamento",
        text2: message,
      });
    },
  });
};
