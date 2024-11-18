import { api } from "@/service/api";
import { useMutation } from "@tanstack/react-query";

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
    onError: (error) => console.log(error), // Toast.show({
    //   type: "error",
    //   text1: "Ocorreu um erro",
    //   text2: `${error}`,
    //   visibilityTime: 4000,
    //   autoHide: true,
    //   topOffset: 30,
    //   bottomOffset: 40,
    // }),
  });
};
