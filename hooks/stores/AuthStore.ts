import { removeData } from "@/service/storage";
import { router } from "expo-router";
import { create } from "zustand";

export type User = {
  email: string;
};

type AuthStoreType = {
  user?: User;
  setUser: (user: User) => void;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthStoreType>((set, get) => ({
  setUser: (user) => {
    set(() => ({ user }));
  },
  logout: async () => {
    await removeData("token");
    router.push("/");
    set(() => ({ user: undefined }));
  },
}));
