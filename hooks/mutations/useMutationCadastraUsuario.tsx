import { api } from "@/service/api";
import { useMutation } from "@tanstack/react-query";
import { useMutationLogin } from "./useMutationLogin";

type UsuarioRequest = {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
};

const cadastraUsuario = async (data: UsuarioRequest) => {
  console.log(data);
  await api.post("auth/cadastrar", {
    ...data,
  });
  return data;
};

export const useMutationCadastraUsuario = () => {
  const { mutateAsync: login } = useMutationLogin();
  return useMutation(cadastraUsuario, {
    onSuccess: async (data) => {
      await login({ email: data.email, senha: data.senha });
    },
    onError: (error) => console.log(error),
  });
};
