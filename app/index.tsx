import Input from "@/components/form/Input";
import { LoginForm, loginSchema } from "@/constants/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  const router = useRouter();
  const methods = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const submit: SubmitHandler<LoginForm> = (data) => {
    
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: "#31658B",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          // gap: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "#31658B",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View style={{ gap: 15, alignItems: "center" }}>
          <Text
            style={{ fontFamily: "GilroyBold", fontSize: 30, color: "#60FFCB" }}
          >
            Faça seu Login
          </Text>
          <Input label="E-mail" id="email" />
          <Input label="Senha" id="senha" secureTextEntry={true} />
          <Button
            mode="contained"
            buttonColor="#66B4B0"
            textColor="#fff"
            style={{
              width: 300,
              borderRadius: 4,
              elevation: 4,
            }}
            // onPress={() => router.push("/apresentacao")}
            labelStyle={{ fontFamily: "GilroyBold" }}
            onPress={methods.handleSubmit(submit)}
          >
            Continuar
          </Button>
        </View>

        <Button textColor="#E8E1C5">
          Não possui cadastro? Criar cadastro {">>"}
        </Button>
      </View>
    </FormProvider>
  );
}
