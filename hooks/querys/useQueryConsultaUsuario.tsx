import { api } from "@/service/api";
import { ConsultaUsuarioResponse } from "@/types/consultaUsuario";
import { useQuery } from "@tanstack/react-query";
import axios, { HttpStatusCode } from "axios";
import { router } from "expo-router";
import { useAuthStore } from "../stores/AuthStore";

const consultaUsuario = async () => {
  const { data: usuarios } = await api.get<ConsultaUsuarioResponse[]>(
    "Usuario/listar"
  );

  return usuarios;
};

export const useQueryConsultaUsuario = (enabled?: boolean) => {
  return useQuery(["usuario"], () => consultaUsuario(), {
    enabled,
    refetchOnWindowFocus: true,
    retry: false,
    // staleTime: 1000 * 60 * 10,
    onSuccess: (user) => {
      if (!user) router.push("/");
      return user;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpStatusCode.Forbidden)
          return useAuthStore.getState().logout();
      }
      console.log(error, "Ocorreu um erro ao consultar usuário.");
    },
  });
};
