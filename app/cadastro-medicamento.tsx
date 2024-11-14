import Input from "@/components/form/Input";
import { LoginForm, loginSchema } from "@/constants/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Medicamentos() {
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
      >
        <View style={{ gap: 15 }}>
          <Text
            style={{ fontFamily: "GilroyBold", fontSize: 30, marginBottom: 45 }}
          >
            Cadastrar Medicamento
          </Text>
        </View>

        <View style={{ gap: 5 }}>
          <Input id="" label="Nome do Medicamento" />
          <Input
            id=""
            label="Descrição"
            placeholder="Remédio para dor de cabeça"
          />
          <Input id="" label="Dosagem (comprimidos)" />
          <View style={{ flexDirection: "row" }}>
            <Input id="" label="Intervalo (dias)" style={{ width: 50 }} />
            <select id="" />
          </View>
          <select id="" />
        </View>
      </View>
    </FormProvider>
  );
}
