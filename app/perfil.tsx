import { LoginForm, loginSchema } from "@/constants/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";

export default function Perfil() {
  const router = useRouter();
  const methods = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: "#31658B",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </FormProvider>
  );
}
