import { api } from "@/service/api";
import { useMutation } from "@tanstack/react-query";

type LoginRequest = {
  email: string;
  senha: string;
};

const login = async (data: LoginRequest) => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("senha", data.senha);
  await api.post("/logar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useMutationLogin = () => {
  return useMutation(login, {
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
