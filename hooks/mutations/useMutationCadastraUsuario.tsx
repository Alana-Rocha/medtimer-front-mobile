import { api } from "@/service/api";
import { ApiError } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { useMutationLogin } from "./useMutationLogin";

type UsuarioRequest = {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
};

const cadastraUsuario = async (data: UsuarioRequest) => {
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
    onError: (error: ApiError) => {
      const message =
        error.response?.data?.message ||
        "Ocorreu um erro ao cadastrar usuário.";
      Toast.show({
        type: "error",
        text1: "Erro ao cadastrar usuário",
        text2: message,
      });
    },
  });
};
