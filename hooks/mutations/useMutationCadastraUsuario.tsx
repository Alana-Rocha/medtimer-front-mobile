import { api } from "@/service/api";
import { useMutation } from "@tanstack/react-query";

type UsuarioRequest = {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
};

const cadastraUsuario = async (data: UsuarioRequest) => {
  const formData = new FormData();
  formData.append("nome", data.nome);
  formData.append("email", data.email);
  formData.append("senha", data.senha);
  formData.append("dataNascimento", data.dataNascimento);
  await api.post("/cadastrarUsuario", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useMutationCadastraUsuario = () => {
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
