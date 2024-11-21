import { api } from "@/service/api";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type MedicamentoRequest = {
  nome: string;
  descricao: string;
  dosagem: number;
  duracao: number;
  frequencia: number;
  horario: string;
};

const cadastraUsuario = async (data: MedicamentoRequest) => {
  const formData = new FormData();
  formData.append("nome", data.nome);
  formData.append("descricao", data.descricao);
  formData.append("dosagem", data.dosagem.toString());
  formData.append("duracao", data.duracao.toString());
  formData.append("frequencia", data.frequencia.toString());
  formData.append("horario", data.horario);
  await api.post("/cadastrarMedicamento", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useMutationCadastraMedicamento = () => {
  return useMutation(cadastraUsuario, {
    onError: (error) => {
      if (axios.isAxiosError(error)) {
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
