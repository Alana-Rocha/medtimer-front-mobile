import { api } from "@/service/api";
import { setData } from "@/service/storage";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { jwtDecode } from "jwt-decode";
import { useAuthStore, User } from "../stores/AuthStore";

type LoginRequest = {
  email: string;
  senha: string;
};

type LoginResponse = {
  token: string;
};

const login = async (data: LoginRequest) => {
  const { data: resData } = await api.post<LoginResponse>("auth/login", {
    ...data,
  });
  return resData;
};

export const useMutationLogin = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation(login, {
    onSuccess: async (res) => {
      const token = res.token;
      console.log(token);
      await setData({ key: "token", data: token });
      const user = jwtDecode<User>(token);
      setUser(user);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return router.push("/");
    },
  });
};
