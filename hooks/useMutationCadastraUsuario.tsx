import { api } from "@/service/api";
import { useMutation } from "@tanstack/react-query";

type UsuarioRequest = {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
};

const cadastraUsuario = async (data: UsuarioRequest) => {
  const { data: usuario } = await api.post("/cadastrarUsuario", { ...data });
  console.log(usuario);
  return usuario;
};

export const useMutationCadastraUsuario = () => {
  return useMutation(cadastraUsuario, {
    onError: (error) =>
      //TODO testar
      console.log(error, "Ocorreu um erro ao cancelar a proposta."),
  });
};
