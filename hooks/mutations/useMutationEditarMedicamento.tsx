import { api } from "@/service/api";
import { useMutation } from "@tanstack/react-query";

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
    onError: (error) => {
      console.log(error, "Erro ao cadastrar medicamento");
      //   if (axios.isAxiosError(error)) {
      //     if (error.response?.status === HttpStatusCode.Forbidden)
      //       return useAuthStore.getState().logout();
      //     console.error("Erro na API:", {
      //       status: error.response?.status,
      //       data: error.response?.data,
      //     });
      //   } else {
      //     console.error("Erro desconhecido:", error);
      //   }
    },
  });
};
