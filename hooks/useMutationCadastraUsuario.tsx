import { useMutation } from "@tanstack/react-query";
import { api } from "@/constants/api";

type UsuarioRequest = {
  nome: string;
  email: string;
  senha: string;
};

const cadastraUsuario = async (data: UsuarioRequest) => {
  await api.post("/cadastrarUsuario", {
    ...data,
  });
};

export const useMutationCadastraUsuario = () => {
  return useMutation(cadastraUsuario, {
    onError: (error) =>
        //TODO testar
      console.log(error, "Ocorreu um erro ao cancelar a proposta."),
  });
};
