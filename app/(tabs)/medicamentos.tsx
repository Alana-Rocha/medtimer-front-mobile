import { LoginForm, loginSchema } from "@/constants/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Image, View } from "react-native";
import { FAB, Text } from "react-native-paper";

export default function Medicamentos() {
  const router = useRouter();
  const methods = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: "#FFF",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ gap: 15 }}>
          <Text
            style={{
              fontFamily: "GilroyRegular",
              textAlign: "center",
              color: "#31658B",
              fontSize: 21,
            }}
          >
            Parece que você não possui nenhum <br /> medicamento cadastrado...
          </Text>
          <Text
            style={{
              fontFamily: "GilroyRegular",
              textAlign: "center",
              color: "#31658B",
              fontSize: 21,
            }}
          >
            Clique no botão{" "}
            <Image
              source={require("../../assets/images/plus.png")}
              style={{ width: 23, height: 22 }}
            />{" "}
            para começar!
          </Text>
        </View>

        <FAB
          label="Adicionar Medicamento"
          icon="plus"
          color="#FFF"
          size="small"
          style={{
            position: "absolute",
            right: 40,
            bottom: 20,
            backgroundColor: "#66B4B0",
            borderRadius: 50,
            elevation: 4,
          }}
          onPress={() => console.log("FAB Pressionado")}
        />
      </View>
    </FormProvider>
  );
}
