import { api } from "@/service/api";
import { getData, removeData } from "@/service/storage";
import { router } from "expo-router";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

export type User = {
  sub: string;
};

type AuthStoreType = {
  user: User;
  setUser: (user: User) => void;
  verificarLogin: () => Promise<boolean>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthStoreType>((set, get) => ({
  user: undefined!,
  setUser: (user) => {
    set(() => ({ user }));
  },
  verificarLogin: async () => {
    const recoveredToken = await getData("token");
    if (!recoveredToken) return false;
    api.defaults.headers.Authorization = `Bearer ${recoveredToken}`;
    const decodedUser = jwtDecode<User>(recoveredToken);
    get().setUser(decodedUser);
    return true;
  },
  logout: async () => {
    await removeData("token");
    router.push("/");
    set(() => ({ user: undefined }));
  },
}));
