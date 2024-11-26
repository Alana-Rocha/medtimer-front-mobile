import { Input } from "@/components/form/Input";
import { LoginForm, loginSchema } from "@/constants/schemas/schemas";
import { useMutationLogin } from "@/hooks/mutations/useMutationLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  const router = useRouter();
  const methods = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", senha: "" },
  });

  const { mutateAsync, isLoading } = useMutationLogin();

  const submit: SubmitHandler<LoginForm> = async (data) => {
    await mutateAsync({
      email: data.email,
      senha: data.senha,
    });
    Toast.show({
      type: "success",
      text1: "Sucesso",
      text2: "Cadastro realizado!",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
    router.push("/(tabs)/medicamentos");
  };

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: "#31658B",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#31658B",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 230, height: 180 }}
          />
        </View>
        <View style={{ gap: 10, alignItems: "center" }}>
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
              padding: 5,
            }}
            loading={isLoading}
            onPress={methods.handleSubmit(submit)}
            labelStyle={{ fontFamily: "GilroyBold" }}
          >
            Continuar
          </Button>
          <Button textColor="#E8E1C5" onPress={() => router.push("/cadastro")}>
            Não possui cadastro? Criar cadastro {">>"}
          </Button>
        </View>
      </View>
    </FormProvider>
  );
}
